import { useState } from "react";

const EditTaskModal = ({ task, onClose, onUpdate }) => {
  const [updatedTask, setUpdatedTask] = useState({
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit to update task
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(task.id, updatedTask);  // Update task in the parent component
    onClose();  // Close the modal after updating
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Edit Task
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Title</label>
            <input
              type="text"
              name="title"
              value={updatedTask.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Description</label>
            <textarea
              name="description"
              value={updatedTask.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={updatedTask.dueDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
