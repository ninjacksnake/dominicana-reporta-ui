import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <AppRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
