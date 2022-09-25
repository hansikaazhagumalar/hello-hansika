import { useState, useContext } from "react";
import useAuth from "../hooks/useAuth";
import AuthContext from "../context/AuthProvider";

const Table = () => {
    const { setAuth } = useContext(AuthContext);
    const { auth } = useAuth();
  
      return(
      <div>
        <table border={100} >
            <tr>
             <td><h1>My name is HansikaAzhagumalar{ auth.username }</h1></td>
            </tr>
            <tr>
             <td><h1>Iam from class 6th A{ auth.username }</h1></td>
            </tr>
            <tr>
             <td><h1>My aimbition is to become a GoogleCEO{ auth.username }</h1></td>
            </tr>
            <tr>
             <td><h1> So this is myself small introduction{ auth.username }</h1></td>
            </tr>
         </table>
      </div>
      )
      
      }
    
    export default Table;