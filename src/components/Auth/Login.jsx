import React, { useState } from "react";


const Login = ({handleLogin}) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    console.log("email is ", email);
    console.log("password is ", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-cyan-400">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md hover:shadow-2xl transition">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Welcome!
        </h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
