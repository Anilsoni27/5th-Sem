import React, { useState } from "react"

const imageSlider = () => {
    const [index,setIndex] = useState(0);
    const images = ["https://plus.unsplash.com/premium_photo-1669740462478-135db9b990ea?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1600409396055-e2f42d491271?q=80&w=410&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]

    return(
        <div>
            <h1 style = {{backgroundColor:"black",color:"white"}}>Image Slider</h1>
            <img src={image[index]} alt="img-here"
               style={{height:"200px", width:"200px"}}></img>
            <br></br>
            <button onClick={() => 
                setIndex((index-1+images.length)% images.length)}>
                Left
            </button>
            <button onClick={()=>}></button>
        </div>
    )
}