import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const API_URL = 'http://localhost:8000/api';

export default function Recipe() {

  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const recipeResponse = await axios.get(`${API_URL}/recipes/${recipeId}/`);
        setRecipe(recipeResponse.data);

        const categoryResponse = await axios.get(`${API_URL}/cats/${recipeResponse.data.category}/`);
        setCategoryName(categoryResponse.data.name);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  return (
    <div>
      <h2>Название: {recipe.title}</h2>
      <h3>Категория:    
      <Link className='link' to={`/categories/${recipe.category}`}> {categoryName}</Link></h3>
      <h3>Рецепт:</h3> <p>{recipe.recipe}</p>
    </div>
  );
};