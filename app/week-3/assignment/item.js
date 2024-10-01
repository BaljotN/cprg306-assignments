export default function Item({item}){
    
    let {
        name, 
        quantity, 
        category
    } = item;

    return(
        // <div style={{
        //     marginBottom:20,
        //     marginLeft:20,
        //     paddingLeft:20,
        //     paddingTop:10,
        //     backgroundColor:"#0B0551",
        //     width:300,
        //     height:70,
        //     // justifyContent:"center",
        //     textAlign:"center"
        //     }}>
         <div className="mb-10 ml-10 p-10 bg-blue-900 w-80 h-auto text-center">
            <h3 style={{
                fontWeight:"bold",
                fontSize:20
                }}>{name}</h3>
            <p style={{fontSize:15}}>Buy {quantity} in {category}</p>
        </div>
    );

}