import React, { useState, useEffect } from "react";
import './Card.css';



function Button() {
    const [data,setData]=useState([]);

const getData = () => {
    fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
    .catch(error => {
      console.log(error)
    })
}
useEffect(()=>{
    getData()
  },[])

    return (
      <div className="card">
        {data && data.length>0 && data.map((item, index)=>
          <div key={index} className="card-item">
            {item.popular == true ? <p className="label">Popular</p> : ""}
            <img src={item.image} alt={item.name || "image"}/>
            <div className="info">
              <p className="name">{item.name}</p>
              <p className="price">{item.price}</p>
            </div>
 
            <div className="ratings">
              <div>
                <img src={item.rating == null ? "./images/star.svg" : "./images/star_fill.svg" } alt="image" />
                <p>
                  {item.rating == null ? <span className="no-ratings">No ratings</span> : item.rating }
                  <span className="votes"> {item.rating == null ? "" : `(${item.votes} votes)`}</span>
                  </p>
              </div>
              <p className="sold-out">{item.available == true ? "" : "Sold out" }</p>
            </div>
          </div>
      )}
       </div>
    );
  }
  export default Button;