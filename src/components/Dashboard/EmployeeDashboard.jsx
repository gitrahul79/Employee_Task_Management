import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-300 to-blue-500 text-white relative">
      {/* Logout Button - Top right */}
      <div className="absolute top-4 right-6">
       
      </div>

      <Header />
      <TaskListNumbers />
      <TaskList />

      {/* Typing Welcome Message at bottom center */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <p className="text-white text-lg font-semibold whitespace-nowrap overflow-hidden border-r-2 border-white animate-typing">
          Welcome back, Rahul! Hope you're doing well.
        </p>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
