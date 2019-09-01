const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
