import React, { useState, useEffect } from "react";
import styles from "./ItemList.module.css";
import { useNavigate } from "react-router-dom";

const ItemList = ({ name }) => {
  const navigate = useNavigate(); // hook for navigation
  const [items, setItems] = useState([]);

  const getAllItems = async (itemsUrl) => {
    await fetch(itemsUrl)
      .then((response) => response.json())
      .then((itemsData) => setItems(itemsData))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const itemsUrl = "https://jsonplaceholder.typicode.com/posts";
    getAllItems(itemsUrl);
  }, []);

  const handleItemDetail = (item, e) => {
    e.preventDefault();
    navigate("item-detail/" + item.id);
  };

  const navigateCreateItem = (e) => {
    e.preventDefault();
    navigate("item-create");
  };

  return (
    <div className={styles.itemList}>
      <h3>Item List: {name}</h3>
      <button onClick={(e) => navigateCreateItem(e)}>Create Item</button>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={(e) => {
              handleItemDetail(item, e);
            }}
            className={styles.itemCard}
          >
            <h2>User ID: {item.userId}</h2>
            <h2>Title: {item.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

// And another pageXOffset, input, which will take value and post calculateNewValue
// And also delete api call.
