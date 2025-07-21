import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 mx-4">
      {/* New Task */}
      <div className="bg-cyan-500/90 rounded-xl p-4 text-center shadow-md text-white">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-md mt-1 font-medium">New Task</h3>
      </div>

      {/* Completed */}
      <div className="bg-green-500/90 rounded-xl p-4 text-center shadow-md text-white">
        <h2 className="text-3xl font-bold">3</h2>
        <h3 className="text-md mt-1 font-medium">Completed</h3>
      </div>

      {/* Accepted */}
      <div className="bg-blue-500/90 rounded-xl p-4 text-center shadow-md text-white">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-md mt-1 font-medium">Accepted</h3>
      </div>

      {/* Failed */}
      <div className="bg-red-500/90 rounded-xl p-4 text-center shadow-md text-white">
        <h2 className="text-3xl font-bold">1</h2>
        <h3 className="text-md mt-1 font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
