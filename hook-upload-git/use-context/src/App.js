import React from "react"
import { createContext } from "react";
import ComponentA from "./ComponentA";

const FirstName = createContext()
const LastName = createContext()

const App = () =>{

  return (
    <FirstName.Provider value={"john"}>
      <LastName.Provider value={"doe"} >
      <ComponentA />
      </LastName.Provider>
    </FirstName.Provider>
  );
}

export default App;
export {FirstName, LastName}
