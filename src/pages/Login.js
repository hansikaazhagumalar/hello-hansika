import { useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import useAuth from "../hooks/useAuth";
import AuthContext from '../context/AuthProvider';
import App from '../App';
import { Navigate } from 'react-router-dom';


const  Login = () => {

  const { setAuth } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${username}, ${password}` );
    setAuth({username, password});
  }

  return(
   <form onSubmit={handleSubmit}>
    <table align='center' style={{"alignContent": "center"}}>
        <tr>
            <td><label>Enter your Username:
                <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            </td>
        </tr>
         <tr>
            <td><lable>Enter your password:
                <input
                type="text"

                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              </lable>

              </td>
            </tr>    
        </table>
        <input type="submit"  value="login"/>
    </form>
   );
}

export default Login;