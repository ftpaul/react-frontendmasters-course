import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt-me!"),
  //   React.createElement(Pet, {
  //     name: "Horus",
  //     animal: "dog",
  //     breed: "Rottweiler"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "dog",
  //     breed: "Havanese"
  //   }),
  //   React.createElement(Pet, { name: "Jobin", animal: "cat", breed: "Mixed" })
  // ]);
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Horus" animal="Dog" breed="Rottweiler"></Pet>
      <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Jobin" animal="Cat" breed="Mixed"></Pet>
    </div>
  );
};

render(<App />, document.getElementById("root"));
