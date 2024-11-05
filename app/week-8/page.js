"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(""); 

    
    const handleAddItem = (newItemObj) => {
        setItems([...items, newItemObj]);
    };

    const handleItemSelect = (item) => {
        const cleanedName = item.name 
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="p-10 bg-blue-950">
            <h1 className="bg-blue-950 h-10 text-4xl mb-6">Shopping List</h1>
            <div className="flex space-x-10">
                <div>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} /> 
                </div>
                <div>
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}
