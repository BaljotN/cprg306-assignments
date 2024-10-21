"use client"

import { useState } from "react";
import Item from "./item";
import items from "./items.json";


export default function ItemList(){

  const [sortBy,setSortBy] = useState("name");

  const sortedItems = [...items].sort((a,b) => a.name.localeCompare(b.name));
  if(sortBy == "name"){
  sortedItems.sort((a,b) => a.name.localeCompare(b.name));
  }
  else if(sortBy =="category"){
  sortedItems.sort((a,b) => a.category.localeCompare(b.category))
  }

  const sortByName = () =>{
    setSortBy("name");
  }
  const sortByCat = () =>{
    setSortBy("category");
  }
  return(

<main className="bg-blue-950">
  <button onClick={sortByName} className="bg-purple-400 text-black ml-10 mb-6 p-1 rounded-lg hover:bg-purple-600 focus:bg-purple-600 click:bg-purple-400">Sort by Name</button>
  <button onClick={sortByCat} className="bg-purple-400 text-black ml-4 mb-6 p-1 rounded-lg hover:bg-purple-600 focus:bg-purple-600 click:bg-purple-400">Sort by Category</button>
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