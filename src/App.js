import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blog";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TodoDemo from "./pages/TodoDemo";
import { AuthProvider } from "./context/AuthProvider";
import Signin from "./pages/Signin";
import New from"./pages/New";
import Table from"./pages/Table";
import Clock from"./pages/Clock.js";
import Timer from "./pages/Timer.js";
import LoginControl from "./pages/LoginControl.js"

export default function App() {
  return (
    <BrowserRouter>
     <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            <Route path="register" element={<Register/>} />
            <Route path="login" element={<Login />} />
            <Route path="signin" element={<Signin />} />
            <Route path="todos" element={<TodoDemo/>} />
            <Route path="new" element={<New/>} />
            <Route path="table" element={<Table/>} />
            <Route path="clock" element={<Clock/>} />
            <Route path="timer" element={<Timer/>} />
            <Route path="logincontrol" element={<LoginControl/>} />
        
          </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
