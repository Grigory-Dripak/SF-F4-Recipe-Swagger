import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:8000/api';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/cats/`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Категории рецептов:</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link className='link' to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}