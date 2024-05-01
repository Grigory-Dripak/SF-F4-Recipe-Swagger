import React from 'react';
import Categories from './Categories';
import { Link } from 'react-router-dom';


export default function Main() {
  return (
    <div>
      <Categories />
      <ul>
        <li>
          <Link className='link' to={`/recipes/`}> { "Все рецепты" }</Link>
        </li>
        <li>
          <Link className='link' to={`/swagger/`}> { "Документация SwaggerAPI" }</Link>
        </li>
      </ul>
    </div>
  );
};