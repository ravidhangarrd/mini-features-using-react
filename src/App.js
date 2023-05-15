import { Routes, Route } from "react-router-dom";
import "./App.css";
import AppNav from "./Components/AppNav";
import NotificationCart from "./pages/NotificationCart";

function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-purple-100">
      <Routes>
        <Route path="/" element={<AppNav />} />
        <Route path="/navigation-cart" element={<NotificationCart />} />
      </Routes>
    </div>
  );
}

export default App;
