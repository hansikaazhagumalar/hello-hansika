import { useState, useContext } from "react";
import useAuth from "../hooks/useAuth";
import AuthContext from "../context/AuthProvider";

const New = () => {
    const { setAuth } = useContext(AuthContext);
    const { auth } = useAuth();
  
      return(
      <div>
        <table border={1}>
            <tr>
             <td><h1>I have many New products{ auth.username }</h1></td>
            </tr>
            <tr>
             <td><h1>Hansika have many Blogs by new products{ auth.username }</h1></td>
            </tr>
            <tr>
             <td><h1>Contact Me: my no- 2937465102{ auth.username }</h1></td>
            </tr>
            <tr>
             <td><h1> This is Hansika's Home{ auth.username }</h1></td>
            </tr>
         </table>
      </div>
      )
      
      }
    
    export default New;