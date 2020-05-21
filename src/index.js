import React from "react";
import ReactDom from "react-dom";

const customStyles = {
  fontSize: "30px",
  borderBottom: "2px solid #aaa",
  fontFamily: "Lato",
  textAlign: "center",
  width: "max-content",
  margin: "20px auto"
};

const date = new Date();
const hours = date.getHours();

let greeting = "";

if (hours < 12) {
  greeting = "Good Morning";
  customStyles.color = "#c62828";
} else if (hours < 18) {
  greeting = "Good Afternoon";
  customStyles.color = "#8e24aa";
} else {
  greeting = "Good Evening";
  customStyles.color = "#2979ff";
}

const App = <h1 style={customStyles}>{greeting}</h1>;

ReactDom.render(App, document.getElementById("root"));
