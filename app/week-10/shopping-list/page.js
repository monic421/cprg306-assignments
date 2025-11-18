"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user } = useUserAuth();
    const router = useRouter();

    useEffect(() => {
        if (user === null) {
            router.replace("/week-9");
            return;
        }

        if (!user) return;

        async function loadItems() {
            try {
                const data = await getItems(user.uid);
                setItems(data);
            } catch (err) {
                console.error(err);
                alert("Failed to load shopping list from Firestore.");
            }
        }

        loadItems();
    }, [user, router]);

    if (user === null) return null;

    async function handleAddItem(item) {
        try {
            const id = await addItem(user.uid, item);
            setItems((prev) => [{ id, ...item }, ...prev]);
        } catch (err) {
            console.error(err);
            alert("Failed to add item to Firestore.");
        }
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