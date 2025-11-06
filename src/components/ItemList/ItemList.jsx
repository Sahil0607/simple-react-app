import React, { useState, useEffect } from "react";
import styles from "./ItemList.module.css";
import { useNavigate } from "react-router-dom";

const ItemList = ({ name }) => {
  const navigate = useNavigate(); // hook for navigation
  const [users, setUsers] = useState([]);

  const getAllUsers = async (usersUrl) => {
    await fetch(usersUrl)
      .then((response) => response.json())
      .then((usersData) => setUsers(usersData))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const usersUrl = "https://jsonplaceholder.typicode.com/users";
    getAllUsers(usersUrl);
  }, []);

  const handleUserDetail = (user, e) => {
    e.preventDefault();
    navigate("item-detail/" + user.id);
  };

  return (
    <div className={styles.itemList}>
      <h3>Item List: {name}</h3>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={(e) => {
              handleUserDetail(user, e);
            }}
            className={styles.userCard}
          >
            <h2>User Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

// Next create new component where we can click and see all detail of users.ItemList
// And another pageXOffset, input, which will take value and post calculateNewValue
// And also delete api call.
