import { useState } from "react";
import Login from "./components/Login";

function App({ msalInstance }) {
  const [user, setUser] = useState("");

  const handleChange = (event) => {
    setUser(event.target.value);
    console.log("This is user:", user);
  };

  return (
    <div>
      <h1>Hello world</h1>
      <Login value={user} handleChange={handleChange}></Login>
    </div>
  );
}

export default App;
