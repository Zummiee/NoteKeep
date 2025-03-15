import React, { useState } from "react";

function Header(props) {

  const pikachuTheme = ["#FFD36E", "#FFF3B0", "/images/pikachu.png", "Pikachu"];
  const bulbasaurTheme = ["#76C7C0", "#C0E8D5", "/images/bulbasaur.png", "Bulbasaur"];
  const squrtleTheme = ["#87CEEB", "#A7E6E3", "/images/squrtle.png", "Squrtle"];
  const charmanderTheme = ["#FFA559", "#FFC857", "/images/charmander.png", "Charmander"];

  return (
    <header style={{backgroundColor:props.currentTheme[0]}}>
      <h1>Pokemon Note Keep</h1>
      <div className="header-buttons">
        <button onClick={() => {props.onThemeChange(pikachuTheme);}} style={{ color: props.currentTheme[0] }}>Pikachu</button>
        <button onClick={() => {props.onThemeChange(bulbasaurTheme);}} style={{ color: props.currentTheme[0] }}>Bulbasaur</button>
        <button onClick={() => {props.onThemeChange(squrtleTheme);}} style={{ color: props.currentTheme[0] }}>Squrtle</button>
        <button onClick={() => {props.onThemeChange(charmanderTheme);}} style={{ color: props.currentTheme[0] }}>Charmander</button>
      </div>
    </header>
  );
}

export default Header;
