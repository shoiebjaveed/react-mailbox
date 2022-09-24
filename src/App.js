import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from "./components/layout/Inboxview/Inbox";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Inbox />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
