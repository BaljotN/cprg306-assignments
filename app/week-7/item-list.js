"use client";

import { useState } from "react";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");
    
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    // Event handlers for sorting
    const sortByName = () => {
        setSortBy("name");
    };
    
    const sortByCategory = () => {
        setSortBy("category");
    };

    return (
        <main className="bg-blue-950">
            <button
                onClick={sortByName}
                className="bg-purple-400 text-black ml-10 mb-6 p-1 rounded-lg hover:bg-purple-600 focus:bg-purple-600 active:bg-purple-400"
            >
                Sort by Name
            </button>
            <button
                onClick={sortByCategory}
                className="bg-purple-400 text-black ml-4 mb-6 p-1 rounded-lg hover:bg-purple-600 focus:bg-purple-600 active:bg-purple-400"
            >
                Sort by Category
            </button>
            <ul>
                {sortedItems.map((item) => (
                    <li key={item.id} className="mb-10 ml-10 p-10 bg-blue-900 w-80 h-auto text-center">
                        <h2 className="text-xl font-bold">{item.name}</h2>
                        <p>Buy {item.quantity} in {item.category}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
