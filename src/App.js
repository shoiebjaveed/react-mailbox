import { useContext, useEffect } from "react";
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
import ViewSentMessage from "./components/layout/sentbox/ViewSentMessage";
import Draftbox from "./components/layout/draftbox/Draftbox";
import UserDetails from "./components/layout/user/UserDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchSentMailData, sendMailData } from "./store/actions/sentbox-actions";

let initial = true

function App() {
  const sentbox = useSelector(state => state.sentbox)
  const auth = useContext(AuthContext);
  const isloggedIn = auth.loggedIn;
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (initial) {
      initial = false
      return
    }
    dispatch(sendMailData(sentbox))
  }, [sentbox, dispatch]);

  useEffect(() => {
    dispatch(fetchSentMailData())
  }, [dispatch])



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
          <Route path="/view-message-inbox/:id" element={<ViewSentMessage />} />
          <Route path="/write" element={<ComposeMail />} />
          <Route path="/draft" element={<Draftbox />} />
          <Route path="/sent" element={<Sentbox />} />
          <Route path="/user" element={<UserDetails />} />
          <Route path="/view-message-sent/:id" element={<ViewSentMessage />} />
          <Route path="*" element={<Inbox />} />
        </>}
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
