import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const { employees } = useContext(AuthContext);

  // ✅ Load user from localStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      if (parsed?.role === "admin" || parsed?.role === "employee") {
        setUser(parsed.role);
      }
    }
  }, []);

  // ✅ Handle Login
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (
      employees?.find((e) => e.email === email && e.password === password)
    ) {
      setUser("employee");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }));
    } else {
      alert("Invalid Credentials. Please try again.");
    }
  };

  // ✅ Debug log on user change
  useEffect(() => {
    if (user) {
      console.log("User logged in as:", user);
    }
  }, [user]);

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </>
  );
}

export default App;
