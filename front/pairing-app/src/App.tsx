import Login from "@/pages/Login/login";
import Register from "@/pages/Register/register";
import Home from "@/pages/Home/home";
import Pairing from "@/pages/Pairing/pairing"
import ChatRoom from "@/pages/Chat/chat"
import NavBar from "@/components/NavBar";

import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <div className="App">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pairing" element={<Pairing />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    
    </div>
  );
}

export default App;
