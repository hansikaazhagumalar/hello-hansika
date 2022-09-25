import { useState, useContext } from "react";
import useAuth from "../hooks/useAuth";
import AuthContext from "../context/AuthProvider";


const Blogs = () => {
  const { setAuth } = useContext(AuthContext);
  const { auth } = useAuth();

    return (<h1>Hansika have many blogs by { auth.username }</h1>);
  };
  
  export default Blogs;