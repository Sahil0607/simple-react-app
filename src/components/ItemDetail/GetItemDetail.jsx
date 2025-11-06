import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ShowItemDetail from "./ShowItemDetail/ShowItemDetail";

const GetItemDetail = () => {
  const { id } = useParams(); // get id from url params
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((userData) => setUser(userData))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Item Detail Component</h2>
      <p>Item ID: {id}</p>
      <br />
      <ShowItemDetail userDetail={user} />
    </div>
  );
};

export default GetItemDetail;
