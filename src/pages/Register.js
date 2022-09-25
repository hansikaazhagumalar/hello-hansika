import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import './Register.css'


const  Register = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(10);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [ confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}, ${age},  ${user}, ${password}, ${confirmPassword} ` )
    if ( password != confirmPassword ) 
    {
        alert("Password is not equal");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <table align='center' style={{"alignContent": "center"}}>
            <tr>
                <td><label>Enter your name:
                    <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>

                </td>
            </tr>
            <tr>
                <td><label>Enter your age:
                    <input 
                    type="text" 
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    />
                </label>

                </td>
            </tr>
            <tr>
                <td><label>Enter Username:
                    <input 
                    type="text" 
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    />
                </label>
                </td>
            </tr>
            <tr>
                <td><label>Enter Password:
                    <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                </td>
            </tr>
            <tr>
                <td><label>Enter Confirm Password:
                    <input 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>

                </td>
            </tr>
        </table>
      
      <input type="submit" />
    </form>
  )
}

export default Register;