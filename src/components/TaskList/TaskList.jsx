import React from "react";

const TaskList = () => {
  const baseNote = {
    title: "Make a YouTube video",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam libero quisquam. Ea, vitae et.",
    date: "20 Feb 2024",
    priority: "High",
  };

  const colors = [
    "bg-red-400",
    "bg-green-400",
    "bg-blue-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-teal-400",
    "bg-orange-400",
    "bg-indigo-400",
    "bg-emerald-400",
  ];

  // Create 10 notes with different colors
  const notes = Array.from({ length: 10 }, (_, i) => ({
    ...baseNote,
    color: colors[i % colors.length],
  }));

  return (
    <div className="mt-6 px-4">
      <h2 className="text-xl font-semibold text-white mb-4">Your Notes</h2>

      <div
        className="flex overflow-x-auto gap-4 pb-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {notes.map((note, index) => (
          <div
            key={index}
            className={`min-w-[250px] max-w-sm flex-shrink-0 ${note.color} text-white p-4 rounded-xl shadow-md`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-red-600 text-xs px-2 py-1 rounded font-bold">
                {note.priority}
              </span>
              <span className="text-sm opacity-90">{note.date}</span>
            </div>
            <h3 className="text-lg font-bold mb-1">{note.title}</h3>
            <p className="text-sm leading-snug">{note.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
