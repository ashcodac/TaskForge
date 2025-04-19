import { useEffect, useState } from "react";
import { getTasks, updateTask, deleteTask } from "../services/api"; // Import all necessary API functions

const BinPage = () => {
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [error, setError] = useState(null);

  const fetchDeletedTasks = async () => {
    try {
      const data = await getTasks(); // Get all tasks
      const deleted = data.filter(task => task.is_deleted); // Filter only deleted
      setDeletedTasks(deleted);
    } catch (error) {
      setError("Failed to load deleted tasks");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDeletedTasks();
  }, []);

  const handleRestore = async (taskId) => {
    try {
      await updateTask(taskId, { is_deleted: false });
      setDeletedTasks(prev => prev.filter(task => task.id !== taskId));
    } catch (error) {
      console.error("Restore failed:", error);
    }
  };

  const handlePermanentDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      setDeletedTasks(prev => prev.filter(task => task.id !== taskId));
    } catch (error) {
      console.error("Permanent delete failed:", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
        Deleted Tasks
      </h1>

      {error && <p className="text-red-500">{error}</p>}

      {deletedTasks.length > 0 ? (
        <ul className="space-y-3">
          {deletedTasks.map((task) => (
            <li
              key={task.id}
              className="bg-white dark:bg-gray-700 p-4 rounded shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {task.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {task.description}
              </p>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => handleRestore(task.id)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                >
                  Restore
                </button>
                <button
                  onClick={() => handlePermanentDelete(task.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Delete Permanently
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 dark:text-gray-300">No deleted tasks found.</p>
      )}
    </div>
  );
};

export default BinPage;
