import React from "react";
import { useState } from "react";
import ItemList from "./ItemList/ItemList";

const Hello = ({ name = "World" }) => {
  const [itemName, setItemName] = useState("item component");

  return (
    <div className="hello">
      <h2>Hello, {name}!</h2>
      <ItemList name={itemName} />
    </div>
  );
};

export default Hello;
