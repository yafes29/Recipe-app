import React from 'react'
import axios from "axios";
import Header from "../components/Header";
import Card from "../components/Card";
import { useState } from 'react';


const Home = () => {
  const MealType = ["Breakfast", "Lunch", "Dinner", "Snack", "TeaTime"]
  const [query, setQuery] = useState("egg")
  const [selectedMeal, setSelectedMeal] = useState(MealType[0])
  const [recipes, setRecipes] = useState(null);

  const API_KEY = "280a9f0207045a7b1eb040071263aca6";
  const API_ID = "742d542a";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      const { data } = await axios.get(url);
      setRecipes(data.hits);
      console.log(recipes);
    } else {
      alert("please enter a write")
    }


  }



  return (
    <div>
      <Header setQuery={setQuery} setSelectedMeal={setSelectedMeal} MealType={MealType} getData={getData} />
      {recipes?.length === 0 && (
        <h1>The Not Found</h1>
      )}
      {recipes?.length > 0 && <Card recipes={recipes} />}

    </div>
  )
}

export default Home