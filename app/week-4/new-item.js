"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const decrement = () => setQuantity((q) => Math.max(1, q - 1));
    const increment = () => setQuantity((q) => Math.min(20, q + 1));

    const isMin = quantity === 1;
    const isMax = quantity === 20;

    return (
        <section className="text-center rounded-xl border border-purple-400 bg-purple-50 p-2 dark:border-purple-600 dark:bg-purple-400/20">
            <p className="mb-2">
                <span className="text-sm dark:text-white">Quantity:</span>{" "}
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
    );
}