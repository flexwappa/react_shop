import React from 'react';
import "./AppStyle.css"
import MainPage from "./Pages/MainPage/MainPage";
import Navigation from "./Components/HeaderMenu/Navigation/Navigation";
import HeaderMenuThree from "./Components/HeaderMenuThree/headerMenuThree";
import GarderobPageWoman from "./Pages/GarderobPages/GarderobPageWoman";

function App() {
  return (
      <div>
        <GarderobPageWoman/>
      </div>

  );
}

export default App;
