import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import { useState } from "react";

function App() {
  let [isAuthorized, setAuthorized] = useState(false);

  let handleLogin = () => {
    setAuthorized(true);
  };

  return (
    <>
      <Routes>
        <Route path="/login" element={isAuthorized ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin}/>}/>
        <Route path="/register" element={isAuthorized ? <Navigate to="/dashboard" /> : <Register onLogin={handleLogin}/>}/>
        <Route path="/dashboard" element={isAuthorized ?  <Dashboard/> :<Navigate to="/login"/>}/>
        <Route path="*" element={isAuthorized ? <Navigate to="/dashboard"/> : <Login onLogin={handleLogin}/>}/>
      </Routes>
    </>
  )
}

export default App