"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (!response.ok) console.log(response.statusText);

        const data = await response.json();
        let shuffledMeals = [...data.meals];
        shuffledMeals = shuffledMeals.sort(() => 0.5 - Math.random()).slice(0, 10);

        return shuffledMeals;
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return [];
    }
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const getMeals = await fetchMealIdeas(ingredient);
        setMeals(getMeals); 
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h1 className="ml-20">Meal Ideas for {ingredient}</h1>
            <div className="bg-blue-950 ml-20">
                {meals.length > 0 ? (
                    meals.map(meal => (
                        <div key={meal.idMeal}>
                            <h3>{meal.strMeal}</h3>
                            <img src={meal.strMealThumb} width="150" alt={meal.strMeal} />
                        </div>
                    ))
                ) : (
                    <p>No Meal Ideas Avaliable D:</p> 
                )}
            </div>
        </div>
    );
}
