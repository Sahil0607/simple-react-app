import { Hello } from "../components";
import { Routes, Route } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";
import GetItemDetail from "../components/ItemDetail/GetItemDetail";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/item-list" element={<ItemList />} />
      <Route path="/item-detail/:id" element={<GetItemDetail />} />
    </Routes>
  );
}

export default AppRouter;
