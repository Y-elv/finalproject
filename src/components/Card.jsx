import { useState,useEffect } from "react"

const Card=({title,des,img})=>{
 
    return (
        <>
        <div className="container">
            <img src={img}/>
            <h2>{title}</h2>
            <p>{des}</p>
        </div>
        </>
    )
}
export default Card