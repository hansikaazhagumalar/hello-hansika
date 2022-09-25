import { useState } from "react";

export function MyForm() {

  const [name, setName] = useState("");

  const shoot = () => {
    alert(name);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}` + " submitted")
  }

    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input type="text" name="text1" value={name} onChange={(e) => setName(e.target.value)}/>
          <button onClick={() => shoot()}>Submit</button>
        </label>
      </form>
    )
  }