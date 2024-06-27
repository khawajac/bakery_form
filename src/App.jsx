import NavBar from "./NavBar";
import Title from "./Title";
import RecipeList from "./RecipeList";
import Search from "./Search";
import CakeForm from "./CakeForm";
import React, { useState } from "react";
import './App.css';

function App() {
  const [cakes, setCakes] = ([
    {
        cakeName: "Lemon Drizzle",
        ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
        rating: 5
    },
    {
        cakeName: "Tea Loaf",
        ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
        rating: 3
    },
    {
        cakeName: "Brownie",
        ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
        rating: 4
    },
    {
        cakeName: "Carrot Cake",
        ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
        rating: 5
    }
]); 


  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        <RecipeList cakes={cakes} setCakes={setCakes}/>
        <Search cakes={cakes} setCakes={setCakes}/>
        <CakeForm cakes={cakes} setCakes={setCakes}/>
      </main>
    </>
  );
}

export default App