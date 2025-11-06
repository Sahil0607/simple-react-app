import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowItemDetail from "./ShowItemDetail/ShowItemDetail";

const GetItemDetail = () => {
  const { id } = useParams(); // get id from url params
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    await fetch(url)
      .then((response) => response.json())
      .then((userData) => setUser(userData))
      .catch((error) => console.error(error));

    console.log("Fetched user data: ", user);
  };

  return (
    <div>
      <h2>Item Detail Component</h2>
      <p>Item ID: {id}</p>
      <br />
      {user && Object.keys(user).length > 0 ? (
        <ShowItemDetail itemDetail={user} />
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default GetItemDetail;
