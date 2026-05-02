import React from 'react'

export default function Weather() {

    const API_KEY="8b1418cb7f34a92498e2e6bf1ce11a6f"
    const LINK   =`https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=${API_KEY}&units=metric` 
    
    const handleFetch=async()=>{
        const res= await fetch(LINK)
        const data=await res.json()
        console.log(data.main.temp);
        console.log(data.name);
        
    }



  return (
    <div>
            <h1 style={{color:"red"}}> Hai i am weather</h1>
            <button onClick={handleFetch}>Click here</button>

    </div>
  )
}
