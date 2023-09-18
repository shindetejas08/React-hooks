import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { FirstName, LastName } from "./App";

const ComponentB = () => {
    
  const fname = useContext(FirstName)
  const lname = useContext(LastName)
  return (
    <div>
<h1>{`Welcome ${fname}, ${lname} `}</h1>
      {/* <ComponentC /> */}
    </div>
  );
};


export default ComponentB