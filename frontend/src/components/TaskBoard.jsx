import { useState } from "react";
import AddTaskModal from "../components/AddTaskModal";

const TaskBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const columns = ["To Do", "In Progress", "Done"];

  const handleAddTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
    // Normally, we would call an API here to save the task to the backend
    // For now, this simply updates the state.
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-6">
        {columns.map((title) => (
          <div
            key={title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 min-h-[70vh] transition-transform duration-200 hover:scale-[1.01]"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {title}
            </h2>
            <div className="space-y-2">
              {tasks
                .filter((task) => task.status === title)
                .map((task, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded shadow"
                  >
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {task.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {task.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2"
      >
        <span className="text-xl">＋</span> Add Task
      </button>

      {isModalOpen && (
        <AddTaskModal onClose={() => setIsModalOpen(false)} onAdd={handleAddTask} />
      )}
    </>
  );
};

export default TaskBoard;
