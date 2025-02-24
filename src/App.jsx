/* eslint-disable no-unused-vars */
import React from "react";
import Test from "./Tests/Items";
import SecondTest from "./Tests/FakeStore";
import ThirdTest from "./Tests/Crypto";
import FourthTest from "./Tests/OfficialJokes";
import FifthTest from "./Tests/Users";


function App() {
 
  return (<>
    <Test/><br/><br/>
    <SecondTest/><br/><br/>
    <ThirdTest/><br/><br/>
    <FourthTest/><br/><br/>
    <FifthTest/>
  </>
    
  );
}

export default App;