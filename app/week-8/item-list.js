"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    const sorted = [...items].sort((a, b) => {
        if (sortBy === "name")
            return a.name.localeCompare(b.name);

        const byCat = a.category.localeCompare(b.category);
        return byCat !== 0 ? byCat : a.name.localeCompare(b.name);
    });

    const btnBase = "px-3 py-1 rounded-xl border text-sm transition-colors focus:ring-2 focus:ring-purple-300 dark:focus-ring-400";
    const active = "bg-purple-400 text-white border-purple-400 dark:bg-purple-400 dark:border-purple-400";
    const inactive = "bg-purple-100 text-purple-800 border-purple-300 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-700 dark:hover:bg-purple-800";

    return (
        <section className="space-y-4 p-4">
            {/* Sort Buttons */}
            <div className="flex items-center gap-2">
                <span className="text-lg text-slate-500">Sort by:</span>

                <button
                    className={`${btnBase} ${sortBy === "name" ? active : inactive
                        }`}
                    onClick={() => setSortBy("name")}>Name</button>

                <button
                    className={`${btnBase} ${sortBy === "category" ? active : inactive
                        }`}
                    onClick={() => setSortBy("category")}>Category</button>
            </div>

            {/* Item List */}
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sorted.map((item) => (
                    <Item
                        key={item.name}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={() => onItemSelect?.(it)}
                        className="dark:bg-purple-400/20"
                    />
                ))}
            </ul>
        </section>
    );
}