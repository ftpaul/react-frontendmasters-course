import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt-me!"),
    React.createElement(Pet, {
      name: "Horus",
      animal: "dog",
      breed: "Rottweiler"
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, { name: "Jobin", animal: "cat", breed: "Mixed" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
