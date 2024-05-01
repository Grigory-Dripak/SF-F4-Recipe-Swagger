import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const API_URL = 'http://localhost:8000/api';

export default function Recipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`${API_URL}/recipes/`);
        setRecipes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Рецепты:</h1>
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
