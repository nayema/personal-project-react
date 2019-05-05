import React from "react";

const Login = ({username, handleChange, handleLogin}) => (
    <div>
        <h3>Enter your GitHub username</h3>
        <input
            type="text"
            value={username}
            onChange={handleChange}
        />
        <button onClick={handleLogin}>Login</button>
    </div>
);

export default Login