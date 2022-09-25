import { useState, useContext } from "react";
import useAuth from "../hooks/useAuth";
import AuthContext from "../context/AuthProvider";


const Home = () => {
  const { sethAuth } = useContext(AuthContext);
  const { auth } = useAuth();

    return (<h1> This is Hansika's Home   { auth.username } </h1>);
  };
  
  export default  Home;