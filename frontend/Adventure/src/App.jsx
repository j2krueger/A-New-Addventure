import "./App.css";
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";
import Header from './Header/header'
import Footer from "./Header/footer";
import Homepage from "./homepage/homepage";
import Register from "./pages/login-register/register";
import Login from "./pages/login-register/login";
import Dashboard from "./pages/dashboard/dashboard";
import EntryPage from "./entrypage/entrypage"
import Profile from "./pages/profile/profile"
import axios from "axios";

const url = import.meta.env.VITE_API_URL;

axios.defaults.baseURL = url || process.env.VITE_API_URL;
axios.defaults.withCredentials = true;


function App() {

  return (
    <>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/entry/:id" element={<EntryPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </>
  );
}

export default App;
