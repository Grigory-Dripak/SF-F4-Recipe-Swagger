import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const API_URL = 'http://localhost:8000/api';

export default function Category() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipesByCategory = async () => {
      try {
        const categoryResponse = await axios.get(`${API_URL}/cats/${categoryId}/`);
        setCategory(categoryResponse.data);

        const recipesResponse = await axios.get(`${API_URL}/cats/${categoryId}/recipes/`);
        setRecipes(recipesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
     
    };

    fetchRecipesByCategory();
  }, [categoryId]);

  return (
    <div>
      <h2>Рецепты в категории: {category.name}</h2>
      <ul>
        {recipes.map(recipe => (
            <li key={recipe.id}>
                <Link className='link' to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </li>
        ))}
      </ul>
    </div>
  );
}
