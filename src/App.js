import React, { useState } from "react";
import NewFoodInput from "./NewFoodInput";
import Food from "./Food";
import "./styles.css";

export default function App() {
  const [foodsToTry, setFoodsToTry] = useState([]);

  const addFoodItem = (food) => {
    setFoodsToTry([...foodsToTry, food]);
  };

  const deleteFood = (foodToDelete) => {
    const updatedFood = foodsToTry.filter((food) => food !== foodToDelete);
    setFoodsToTry(updatedFood);
  };

  return (
    <div className="App">
      <h1>New Foods to Try</h1>
      <NewFoodInput addFoodItem={addFoodItem} />
      <ul className="food-list">
        {foodsToTry.map((food, index) => (
          <Food key={index} food={food} deleteFood={deleteFood} />
        ))}
      </ul>
    </div>
  );
}
