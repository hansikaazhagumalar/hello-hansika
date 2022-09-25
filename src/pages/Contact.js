  import { useState, useContext } from "react";
  import useAuth from "../hooks/useAuth";
  import AuthContext from "../context/AuthProvider";

  
  const Contact = () => {
    const { sethAuth } = useContext(AuthContext);
    const { auth } = useAuth();
  



    return (<h1>Contact Me: my no- 2937465102  {auth.username }</h1>);
  };
  
  export default Contact;