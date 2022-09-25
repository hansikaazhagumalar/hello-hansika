import React, {useState} from "react"; 
import { Outlet, Link } from "react-router-dom";

const Layout = () => {

  const [username, setUsername] = useState(localStorage.getItem('username'));

  return (
    <>
    <h4>{username}</h4>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/signin">Signin</Link>
          </li>
          <li>
            <Link to="/new">New</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
          <li>
            <Link to="/clock">Clock</Link>
            </li>
            <li>
            <Link to="/timer">Timer</Link>
            </li>
            <li>
            <Link to="logincontrol">Login Control</Link>  
            </li>             
        </ul>
      </nav>
    <Outlet />
    </>
  )
};

export default Layout;