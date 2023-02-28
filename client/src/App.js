import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

import Navbar from './Navbar'
import Navbar2 from "./Navbar2.0";



function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:8081/v1/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <Navbar/>  
      <h1 className="title">{message}</h1>  
      <section>
        <p>
          To get started, please add an address to the queue.
        </p>
        <p>
          1. Go to address tab and create an address.
        </p>
        <p>2. Add Proxies in proxies tab</p>
        <p>
          3. Create tasks in tasks tab, then start a task when day of drop.
        </p>
        <p className="home_links">
          You can access the app inside of "<Link >http://localhost:3000</Link>" or "<Link>http://127.0.0.0:3000"</Link>
        </p>
      </section>         
    </div>
  );
}

export default App