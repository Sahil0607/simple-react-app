import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowItemDetail from "./ShowItemDetail/ShowItemDetail";

const GetItemDetail = () => {
  const { id } = useParams(); // get id from url params
  const [item, setItem] = useState({});

  useEffect(() => {
    getItemData();
  }, []);

  const getItemData = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    await fetch(url)
      .then((response) => response.json())
      .then((itemData) => setItem(itemData))
      .catch((error) => console.error(error));

    console.log("Fetched item data: ", item);
  };

  return (
    <div>
      <h2>Item Detail Component</h2>
      <p>Item ID: {id}</p>
      <br />
      {item && Object.keys(item).length > 0 ? (
        <ShowItemDetail itemDetail={item} />
      ) : (
        <p>No item data available.</p>
      )}
    </div>
  );
};

export default GetItemDetail;
