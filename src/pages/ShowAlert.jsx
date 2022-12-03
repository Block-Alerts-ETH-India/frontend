import React from "react";
import Header from "../components/Header";

import { useState, useEffect } from "react";

const ShowAlert = () => {

  const [alerts, setAlerts] = useState([]);
  fetch("http://127.0.0.1:8080/alert")
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data.data);
      setAlerts(data.data)
    })

  return (
    <div>
      <Header />
      <div className="title mt-10  p-20  font-bold text-4xl">
        <h1>Show Alert</h1>
        <div
          style={{ height: "90px", padding: "10px" }}
          className="flex  mb-8 flex-col justify-enter border-2 text-base"
        >
          Alert Name
          <div className="hash">
            Alert Address : Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officiis?
          </div>
        </div>
        <div
          style={{ height: "90px", padding: "10px" }}
          className="flex  flex-col justify-enter border-2 text-base"
        >
          Alert Name
          <div className="hash">
            Alert Address : Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officiis?
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAlert;
