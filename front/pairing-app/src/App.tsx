import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Home from "@/pages/Home";
import NavBar from "@/components/NavBar";

import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AccessDenied from "./pages/AccessDenied";

const pages = ['首頁', '配對', '聊天室'];
const settings = ['登入', 'Logout'];


function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/accessDenied" element={<AccessDenied />} />
      </Routes>
    </div>
  );
}

export default App;
