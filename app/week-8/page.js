"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import initialItems from "./items.json";

export default function Page() {
    const [items, setItems] = useState(initialItems);
    const [selectedItemName, setSelectedItemName] = useState("");

    function handleAddItem(item) {
        setItems(prev => [item, ...prev]);
    }

    function cleanName(name) {
        let base = String(name).split(",")[0];
        base = base.replace(/[\p{Extended_Pictographic}\p{Emoji_Presentation}]/gu, "");
        return base.replace(/\s+/g, " ").trim();
    }

    function handleItemSelect(item) {
        const cleaned = cleanName(item.name);
        setSelectedItemName(cleaned);
    }

    return (
        <main>
            <div className="p-5">
                <h1 className="mb-5 text-4xl font-bold text-purple-400 text-center dark:text-purple-600">Shopping List + Meal Ideas</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}