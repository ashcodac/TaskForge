// src/components/AddTaskButton.js
import { Plus } from 'lucide-react';

const AddTaskButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition duration-300"
      aria-label="Add Task"
    >
      <Plus size={24} />
    </button>
  );
};

export default AddTaskButton;
