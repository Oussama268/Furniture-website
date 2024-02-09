import { useEffect, useState } from "react"
import "../App.css"


export default function Rooms({number , room_img , room_name , room_price}) {

  

 
  
  return (
      

        <div id={number} className="Room_div">
          <img  className="rooms_img" src={room_img} />
          <h3>{room_name}</h3>
          <p>${room_price}</p>
        </div>

        
    
  )
}
