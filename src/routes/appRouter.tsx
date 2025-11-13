import { Hello } from "../components";
import { Routes, Route } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";
import GetItemDetail from "../components/ItemDetail/GetItemDetail";
import ItemCreate from "../components/ItemCreate/ItemCreate";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/item-list" element={<ItemList />} />
      <Route path="/item-detail/:id" element={<GetItemDetail />} />
      <Route path="/item-create" element={<ItemCreate />} />
    </Routes>
  );
};

export default AppRouter;
