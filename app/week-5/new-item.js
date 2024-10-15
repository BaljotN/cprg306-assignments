"use client"
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [iBtnDisable, setIBtnDisable] = useState(false);
    const [dBtnDisable, setDBtnDisable] = useState(false);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
           name: name,
           quantity: quantity,
           category: category
        };

        alert(`${quantity} ${name} has been added in the ${category}`);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    const handleCategoryChange = (event) => setCategory(event.target.value);
    const handleNameChange = (event) => setName(event.target.value);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
            setIBtnDisable(quantity + 1 >= 20);
            setDBtnDisable(false);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setDBtnDisable(quantity - 1 <= 1);
            setIBtnDisable(false);
        }
    };

    let buttonStyle = "bg-blue-600 rounded py-3 px-5 mt-3 mr-2 hover:bg-blue-400 disabled:bg-gray-400";

    let inputStyle = "rounded border-black border-2"
    return (
        <main className="m-auto bg-blue-900 text-black w-64 place-items-center text-center rounded-md">
            <form onSubmit={handleSubmit}>
                <div className="p-2">
                    <input 
                        type="text" 
                        placeholder="Item Name"
                        value={name}
                        onChange={handleNameChange}
                        required
                        className={inputStyle} 
                    />
                </div>
                <div>
                    <select value={category} onChange={handleCategoryChange}className={inputStyle}>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <h1>{quantity}</h1>
                    <button type="button"onClick={increment} disabled={iBtnDisable} className={buttonStyle}>+</button>
                    <button type="button" onClick={decrement} disabled={dBtnDisable} className={buttonStyle}>-</button>
                </div>

                <div>
                    <button type="submit" className={buttonStyle}>Add Item</button>
                </div>
            </form>
        </main>
    );
}
