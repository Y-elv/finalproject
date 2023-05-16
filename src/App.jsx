import { useState,useEffect } from 'react'

import './App.css'
import Card from './components/Card'

function App() {

  const[info,setInfo]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(dataResponse=>setInfo(dataResponse))
        },[])
  return (
    <>
    {
      info.map((pt,idx)=>{
        return(
          <div>
          {idx <3 ? ( <Card
            key={idx}
            title={pt.title}
            des={pt.body}
  
            />):""}
            </div>
        
        )
      })
    }
    

      
    </>
  )
}

export default App
