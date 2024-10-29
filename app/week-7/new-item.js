import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const inputStyle = "border border-gray-300 p-2 rounded-md w-full mb-2 text-black";
    const buttonStyle = "w-16 bg-purple-500 text-white p-2 rounded-md w-full mb-2 hover:bg-purple-700 disabled:opacity-50 ml-2";

  
    const generateRandomString = (length) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = generateRandomString(8); 
        const newItem = { id, name, quantity, category };
       
        onAddItem(newItem);

        setName("");
        setQuantity(1);
        setCategory("");
    };


    const handleNameChange = (e) => setName(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);

    const increment = () => setQuantity((prev) => Math.min(prev + 1, 10));
    const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

    const iBtnDisable = quantity >= 10;
    const dBtnDisable = quantity <= 1;

    return (
    <div className="bg-blue-950">
        <main className="m-auto bg-blue-900 text-black w-64 p-4 rounded-md text-center">
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
                <div className="p-2">
                    <select value={category} onChange={handleCategoryChange} className={inputStyle} required>
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
                <div className="p-2">
                    <button type="submit" className={buttonStyle}>Add Item</button>
                </div>
            </form>
        </main>
    </div>
    );
}
