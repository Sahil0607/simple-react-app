import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/appRouter";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
};

export default App;
