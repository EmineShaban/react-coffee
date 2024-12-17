// import './reset.css';
import './App.css';

import React, { useState } from "react";
import Button from './components/Card';

function App() {
  const [activeButton, setActiveButton] = useState("all"); // 'all' or 'available'
  // const [showAvailable, setShowAvailable] = useState(false);

  return (
    <div className="App">

      <div className="body">
        <img src='/images/bg-cafe.jpg' className="background" alt='background' />
        <div className='container'>
          <img src='/images/vector.svg' className="vector" alt='vector' />
          <div className='title-div'>

            <h1>Our Collection</h1>
            <p className='title'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
          </div>
          <div className="buttons">
            <button
              className={activeButton === "all" ? "isActiv" : ""}
              onClick={() => setActiveButton("all")}

            >All Products</button>
            <button
              className={activeButton === "available" ? "isActiv" : ""}
              onClick={() => setActiveButton("available")}
            >Available Now</button>
          </div>

          {activeButton === "all" && <Button availability={"all"}/>}
          {activeButton === "available" && <Button availability={"available"}/>}

        </div>
      </div>
    </div>
  );
}

export default App;