import "./App.css";
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";
import Header from './Header/header'
import Footer from "./Header/footer";
import Homepage from "./homepage/homepage";
import Register from "./pages/login-register/register";
import Login from "./pages/login-register/login";
import Dashboard from "./pages/dashboard/dashboard";


function App() {

  return (
    <>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </>
  );
}

export default App;
