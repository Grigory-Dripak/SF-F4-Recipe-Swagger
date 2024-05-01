import * as React from 'react';
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./Header";
import Main from './Main';
import Categories from './Categories';
import Recipe from './Recipe';
import RecipesList from './RecipesList'
import RecipesByCategory from './RecipesByCategory'
import SwaggerAPI from './SwaggerAPI';

export default function App() {
    return (
        <div>
        <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route path="/categories/" element={<Categories />} />
              <Route path="/categories/:categoryId" element={<RecipesByCategory />} />
              <Route path="/recipes/:recipeId" element={<Recipe />} />
              <Route path="/recipes/" element={<RecipesList />} />
              <Route path="" element={<Main />} />
              <Route path="/swagger/" element={<SwaggerAPI />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
}
