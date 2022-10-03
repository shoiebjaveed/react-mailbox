import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Sidebar from "./components/layout/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Inbox from "./components/layout/Inboxview/Inbox";
import Sentbox from './components/layout/sentbox/Sentbox';
import AuthContext from "./store/auth-context";
import ComposeMail from "./components/layout/composemail/ComposeMail";
import { useSelector } from "react-redux";
import ViewSentMessage from "./components/layout/sentbox/ViewSentMessage";
import Draftbox from "./components/layout/draftbox/Draftbox";

function App() {
  const auth = useContext(AuthContext);
  const isloggedIn = auth.loggedIn

  const mails = useSelector(state => state.sentbox.mails)
    console.log(mails)

  return <>
    <BrowserRouter>
      {isloggedIn && <>
        <Header />
        <Sidebar />
      </>}
      <Routes>
        {!isloggedIn && <>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </>}
        {isloggedIn && <>
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/write" element={<ComposeMail />} />
          <Route path="/draft" element={<Draftbox />} />
          <Route path="/sent" element={<Sentbox />} />
          <Route path="/view-message/:id" element={<ViewSentMessage />} />
          <Route path="*" element={<Inbox />} />
        </>}
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
