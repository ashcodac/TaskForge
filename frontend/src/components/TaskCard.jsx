import { motion } from 'framer-motion';

const TaskCard = ({ task, onEdit, onComplete, onDelete }) => {
  const { id, title, description, status, severity, dueDate, progress } = task;

  // Severity color mapping
  const severityColor = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800",
  };

  return (
    <motion.div
      className={`glass-card ${severityColor[severity]} border rounded-lg p-4 mb-3 shadow-sm transition-all duration-300 ease-in-out`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h4>
          <span className="text-sm text-gray-600 dark:text-gray-300">{description}</span>
        </div>
        <div className="flex flex-col justify-between">
          <div className={`text-xs font-semibold px-2 py-1 rounded ${severityColor[severity]}`}>{severity}</div>
          <span className="text-xs text-gray-500 dark:text-gray-400">Due: {dueDate}</span>
        </div>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <button
          className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
          onClick={() => onComplete(id)}
        >
          Mark as Complete
        </button>
        <button
          className="px-3 py-1 text-white bg-yellow-600 rounded hover:bg-yellow-700"
          onClick={() => onEdit(id)}
        >
          Edit
        </button>
        <button
          className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </motion.div>
  );
};

export default TaskCard;
