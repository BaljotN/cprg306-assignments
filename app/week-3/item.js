export default function Item({item}){
    
    let {
        name, 
        quantity, 
        category
    } = item;

    return(
         <div className="mb-10 ml-10 p-10 bg-blue-900 w-80 h-auto text-center">
            <h3 style={{
                fontWeight:"bold",
                fontSize:20
                }}>{name}</h3>
            <p style={{fontSize:15}}>Buy {quantity} in {category}</p>
        </div>
    );

}
