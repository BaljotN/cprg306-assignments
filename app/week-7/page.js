"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';
import {useState} from "react";


export default function Page(){
const[items,setItems]=useState(itemsData);

const handleAddItem = (newItemObj) => {
     setItems([...items, newItemObj])  
}

    return(
    <main>
        <h1 className="bg-blue-950 h-10 text-4xl">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
    </main>
    );
}

