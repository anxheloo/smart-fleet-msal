import React from "react";

const Login = ({ user, handleChange }) => {
  return (
    <form onSubmit={() => console.log("submitting")}>
      <input
        type="text"
        value={user}
        onChange={handleChange}
        placeholder="my input placeholder"
      ></input>
      <button type="submit">Sign in</button>
    </form>
  );
};

export default Login;
