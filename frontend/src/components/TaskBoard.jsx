import { useEffect, useState } from "react";
import { getTasks, addTask, updateTask, deleteTask } from "../services/api"; // Import API functions
import AddTaskModal from "./AddTaskModal"; // Import Add Task Modal
import EditTaskModal from "./EditTaskModal"; // Import Edit Task Modal

const TaskBoard = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null); // Holds the task being edited
  const columns = ["To Do", "In Progress", "Done"];

  // Fetch tasks from the backend on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks(); // Fetch tasks from backend
        setTasks(data); // Set the tasks to state
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  // Add a new task
  const handleAddTask = async (newTask) => {
    try {
      const task = await addTask(newTask); // Add task to backend
      setTasks((prev) => [...prev, task]); // Update state with new task
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Update an existing task
  const handleUpdateTask = async (taskId, updatedTask) => {
    try {
      const updated = await updateTask(taskId, updatedTask); // Update task on backend
      setTasks((prev) =>
        prev.map((task) => (task.id === taskId ? updated : task)) // Update task in state
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Soft delete a task
  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId); // Soft delete task from backend
      setTasks((prev) => prev.filter((task) => task.id !== taskId)); // Remove task from state
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Mark a task as completed
  const handleMarkAsCompleted = async (taskId) => {
    const updatedTask = {
      ...tasks.find((task) => task.id === taskId),
      status: "Done", // Change status to "Done" or whatever completed status you prefer
    };

    try {
      const updated = await updateTask(taskId, updatedTask); // Update task on backend
      setTasks((prev) =>
        prev.map((task) => (task.id === taskId ? updated : task)) // Update task in state
      );
    } catch (error) {
      console.error("Error marking task as completed:", error);
    }
  };

  // Open the edit modal with the selected task
  const openEditModal = (task) => {
    setCurrentTask(task); // Set the task being edited
    setIsEditModalOpen(true); // Open the edit modal
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
                .filter((task) => task.status === title && !task.is_deleted) // Filter out deleted tasks
                .map((task) => (
                  <div
                    key={task.id}
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded shadow flex flex-col"
                  >
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {task.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {task.description}
                    </p>
                    <div className="mt-4 flex justify-between">
                      {title !== "Done" && (
                        <button
                          onClick={() => handleMarkAsCompleted(task.id)} // Mark task as completed
                          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                        >
                          Mark as Completed
                        </button>
                      )}
                      <button
                        onClick={() =>
                          openEditModal(task) // Open the edit modal for this task
                        }
                        className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteTask(task.id)} // Soft delete task
                        className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add Task Button */}
      <button
        onClick={() => setIsAddModalOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2"
      >
        <span className="text-xl">＋</span> Add Task
      </button>

      {/* Modal for Adding New Task */}
      {isAddModalOpen && (
        <AddTaskModal onClose={() => setIsAddModalOpen(false)} onAdd={handleAddTask} />
      )}

      {/* Modal for Editing Task */}
      {isEditModalOpen && (
        <EditTaskModal
          task={currentTask} // Pass the task being edited to the modal
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={handleUpdateTask} // Update task
        />
      )}
    </>
  );
};

export default TaskBoard;
