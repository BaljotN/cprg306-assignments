"use client"

import { useEffect, useState } from "react";
import Artwork from "./artwork";

export default function SingleArt(){
    
    const [singleArt,setSingleArt] = useState(null);

  
    
    useEffect(() => {
        getSingleArtwork();
    }, []);

    return(
        <section>
           {singleArt && <Artwork artObj={singleArt}/>}
        </section>
    );
}