import { useEffect, useState } from "react";

const BinPage = () => {
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [error, setError] = useState(null);

  // Mock data for now
  useEffect(() => {
    const mockData = [
      { id: 1, name: "Task 1" },
      { id: 2, name: "Task 2" },
      { id: 3, name: "Task 3" },
    ];
    setDeletedTasks(mockData);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Deleted Tasks</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-3">
        {deletedTasks.length > 0 ? (
          deletedTasks.map((task) => (
            <li key={task.id} className="bg-white dark:bg-gray-700 p-4 rounded shadow">
              {task.name}
            </li>
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-300">No deleted tasks found.</p>
        )}
      </ul>
    </div>
  );
};

export default BinPage;
