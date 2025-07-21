import React from "react";

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <div className="w-full px-6 py-4 bg-transparent text-cyan-300 flex items-center justify-between">
      <div>
        <h1 className="leading-tight">
          <span className="text-xl font-bold text-cyan-800">Hello</span> <br />
          <span className="text-2xl font-bold text-white">Rahul 👋🏻</span>
        </h1>
      </div>
      <button
        onClick={handleLogout}
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium shadow-md transition"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
