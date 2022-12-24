import "./App.css";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { useState } from "react";
function App() {
  const [userData, setUserData] = useState({
    data: {},
    isAdded: false,
  });
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard userData={userData} setUserData={setUserData} />} />
        <Route path='/login' element={<Login setUserData={setUserData} />} />
        <Route path='/signup' element={<SignUp setUserData={setUserData} />} />
      </Routes>
    </Router>
  );
}

export default App;
