import React from "react";
import Header from "./Header";

const CreateTask = () => {
  const tasks = new Array(15).fill({
    name: "Rahul",
    title: "Make a UI Design",
    status: "Pending",
  });

  // Soft pastel background colors
  const cardColors = [
    "bg-pink-600/50",
    "bg-green-600/50",
    "bg-yellow-600/50",
    "bg-purple-600/50",
    "bg-orange-600/50",
    "bg-blue-600/50",
    "bg-teal-600/50",
  ];

  return (
    <>
      {/* Custom animation style */}
      <style>
        {`
          @keyframes typingEffect {
            from { width: 0; }
            to { width: 100%; }
          }

          @keyframes blinkCursor {
            0%, 100% { border-color: transparent; }
            50% { border-color: white; }
          }

          .animate-typing {
            overflow: hidden;
            white-space: nowrap;
            width: 0;
            animation: typingEffect 4s steps(40, end) forwards, blinkCursor 0.75s step-end infinite;
            border-right: 2px solid white;
          }
        `}
      </style>

      {/* Main layout */}
      <div className="min-h-screen w-full bg-gradient-to-br from-cyan-300 via-blue-200 to-cyan-400 text-white px-4 pt-6 relative">
        {/* Top Header */}
        <Header />

        {/* Typing Welcome Text */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10">
          <p className="text-white text-lg font-semibold animate-typing">
            Welcome back, Rahul! Hope you're doing well.
          </p>
        </div>

        {/* Main Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6 pt-28 pb-16">
          {/* LEFT: Form Section */}
          <div className="lg:w-1/2 w-full flex justify-center items-start">
            <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-2xl p-6 border border-cyan-400 max-w-md w-full">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Create New Task
              </h2>

              <form className="space-y-8">
                <div>
                  <label className="block font-semibold mb-1">Task Title</label>
                  <input
                    type="text"
                    placeholder="Enter the Task Title"
                    className="w-full px-3 py-2 rounded-md bg-white text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Description</label>
                  <textarea
                    rows="3"
                    placeholder="Enter task details..."
                    className="w-full px-3 py-2 rounded-md bg-white text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  ></textarea>
                </div>

                <div>
                  <label className="block font-semibold mb-1">Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Assign To</label>
                  <input
                    type="text"
                    placeholder="Employee Name"
                    className="w-full px-3 py-2 rounded-md bg-white text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Category</label>
                  <input
                    type="text"
                    placeholder="Design, Dev, etc."
                    className="w-full px-3 py-2 rounded-md bg-white text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-md font-semibold transition shadow-md"
                  >
                    Create Task
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT: Scrollable Task Cards */}
          <div className="lg:w-1/2 w-full max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
            <div className="flex flex-col gap-4">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className={`backdrop-blur-md shadow-md rounded-xl p-4 text-white border border-white/30 ${cardColors[index % cardColors.length]}`}
                >
                  <h2 className="text-xl font-semibold">{task.name}</h2>
                  <h3 className="text-lg">{task.title}</h3>
                  <h5 className="text-sm opacity-90">Status: {task.status}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
