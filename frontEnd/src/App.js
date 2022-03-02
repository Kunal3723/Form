import react from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from "./components/Home.js";
import Users from "./components/Users.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal";
import { getAllInfo } from "./redux/actions/info";
function App() {

  const check = useSelector((state) => state.check);
  const trigger = true;
  const message = "Wrong Credentials";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllInfo());
  }, [])

  return (
    <BrowserRouter>

      <div >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Login />}></Route>
          <Route path="/users" element={<Users />}></Route>

        </Routes>
        {!check && <Modal trigger={trigger} message={message} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
