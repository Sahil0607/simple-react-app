import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRouter from "./routes/appRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
