import React, { useState, useEffect } from "react";
import styles from "./ItemList.module.css";
import { useNavigate } from "react-router-dom";

interface Item {
  id: number;
  userId: number;
  title: string;
  body?: string;
}

const ItemList = ({ name }: { name?: string }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState<Item[]>([]);

  const getAllItems = async (itemsUrl: string) => {
    try {
      const response = await fetch(itemsUrl);
      const itemsData = await response.json();
      setItems(itemsData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const itemsUrl = "https://jsonplaceholder.typicode.com/posts";
    getAllItems(itemsUrl);
  }, []);

  const handleItemDetail = (item: Item, e: React.MouseEvent) => {
    e.preventDefault();
    navigate("item-detail/" + item.id);
  };

  const navigateCreateItem = (e: React.MouseEvent) => {
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
            onClick={(e) => handleItemDetail(item, e)}
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
