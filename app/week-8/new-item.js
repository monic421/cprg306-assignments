"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [quantity, setQuantity] = useState(1);

    const decrement = () => setQuantity((q) => Math.max(1, q - 1));
    const increment = () => setQuantity((q) => Math.min(20, q + 1));

    const isMin = quantity === 1;
    const isMax = quantity === 20;

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { id: Math.random().toString(36).slice(2, 8), name: name.trim(), quantity, category };

        onAddItem?.(item);

        if (!item.name) return;

        alert(
            `Item: ${item.name}\nQuantity: ${item.quantity}\nCategory: ${item.category}`
        );

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="flex justify-center">
            <section className="w-full max-w-xl rounded-xl border border-purple-400 bg-purple-50 p-5 dark:border-purple-600 dark:bg-purple-400/20">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm dark:text-white mb-1">Item Name</label>
                        <input
                            id="name"
                            type="text"
                            required
                            placeholder="e.g., Broccoli 🥦"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-xl border border-purple-400 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400 dark:bg-slate-800 dark:border-purple-400" />
                    </div>

                    <section className="text-center rounded-xl border border-purple-400 bg-purple-50 p-2 dark:border-purple-600 dark:bg-purple-400/20">
                        <label className="block text-xs text-slate-500 dark:text-white/70 mb-1">Quantity (1-20)</label>
                        <p className="mb-2">
                            <span className="text-sm dark:text-white">Current: </span>
                            <span className="text-xl font-bold dark:text-white">{quantity}</span>
                        </p>

                        <div className="flex items-center justify-center gap-3">
                            <button
                                type="button"
                                onClick={decrement}
                                disabled={isMin}
                                className="rounded-lg px-4.5 py-2 border border-purple-200 bg-transparent text-purple-400 hover:bg-purple-100 disabled:cursor-not-allowed focus:ring-2 focus:ring-purple-300 dark:border-purple-400 dark:bg-transparent dark:text-white dark:hover:bg-purple-400/30 dark:focus:ring-purple-500"
                                aria-label="Decrease quantity">
                                -
                            </button>

                            <button
                                type="button"
                                onClick={increment}
                                disabled={isMax}
                                className="rounded-lg px-4 py-2 border border-transparent bg-purple-400 text-white hover:bg-purple-500 disabled:cursor-not-allowed focus:ring-2 focus:ring-purple-300 dark:bg-purple-400 dark:hover:bg-purple-400/30 dark:text-white dark:focus:ring-purple-500"
                                aria-label="Increase quantity">
                                +
                            </button>
                        </div>

                        <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">Allowed range: 1-20</p>
                    </section>

                    <div>
                        <label
                            htmlFor="category"
                            className="block text-sm dark:text-white mb-1">Category</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full rounded-xl border border-purple-400 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400 dark:bg-slate-800 dark:border-purple-400">

                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="canned goods">Canned Goods</option>
                            <option value="dry goods">Dry Goods</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={!name.trim()}
                            className="w-full rounded-xl border border-purple-400 bg-purple-400 text-white font-bold py-3 hover:bg-purple-500 disabled:opacity-40 disabled:cursor-not-allowed focus:ring-2 focus:ring-purple-400">Add Item</button>
                    </div>
                </form>
            </section>
        </div>
    );
}