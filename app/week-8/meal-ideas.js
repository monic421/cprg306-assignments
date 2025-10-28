"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    if (!ingredient) return [];

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
        ingredient
    )}`;

    try {
        const res = await fetch(url);
        if (!res.ok) return [];
        const data = await res.json();
        return data.meals ?? [];
    }
    catch {
        return [];
    }
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        const results = await fetchMealIdeas(ingredient);
        setMeals(results);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="p-4">
            <h2 className="mb-3 text-2xl font-semibold text-purple-500 dark:text-purple-400">Meal Ideas {ingredient ? `for "${ingredient}"` : ""}</h2>

            {!ingredient && (
                <p className="text-slate-500">Select an item to see meal ideas.</p>
            )}

            {ingredient && meals.length === 0 && (
                <p className="text-slate-500">No meals found for this ingredient.</p>
            )}

            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {meals.map((meal) => (
                    <li
                        key={meal.idMeal}
                        className="rounded-xl border border-purple-300 bg-purple-50 p-3 dark:border-purple-600 dark:bg-purple-400/20"
                    >
                        <p className="font-medium">{meal.strMeal}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}