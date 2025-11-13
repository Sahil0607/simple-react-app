import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowItemDetail from "./ShowItemDetail/ShowItemDetail";

const GetItemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<any>({});

  useEffect(() => {
    getItemData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getItemData = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    try {
      const response = await fetch(url);
      const itemData = await response.json();
      setItem(itemData);
    } catch (error) {
      console.error(error);
    }

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
