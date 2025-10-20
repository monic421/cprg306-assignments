"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import initialItems from "./items.json";

export default function Page() {
    const [items, setItems] = useState(initialItems);

    function handleAddItem(item) {
        setItems(prev => [item, ...prev]);
    }

    return (
        <main>
            <div className="p-5">
                <h1 className="mb-5 text-4xl font-bold text-purple-400 text-center dark:text-purple-600">Shopping List</h1>
                <NewItem on onAddItem={handleAddItem} />
                <ItemList items={items} />
            </div>
        </main>
    );
}