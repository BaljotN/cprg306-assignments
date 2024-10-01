import ItemList from "./item-list";
export default function Page(){
    return(
    <main>
        <h1 className="bg-blue-950 h-10 text-4xl">Shopping List</h1>
        <ItemList/>
    </main>
    );
}