import React from "react";
import CreateTask from "../others/CreateTask";

const AdminDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-200 to-blue-400 text-gray-900 relative">
      {/* Logout Button - Top right */}
      <div className="absolute top-4 right-6">
        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-xl hover:bg-blue-100 shadow-md transition"
        >
          Logout
        </button>
      </div>

      <CreateTask />
    </div>
  );
};

export default AdminDashboard;
