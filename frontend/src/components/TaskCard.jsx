const TaskCard = ({ title, status }) => {
    const badgeColor = {
      "To Do": "bg-blue-100 text-blue-800",
      "In Progress": "bg-orange-100 text-orange-800",
      "Done": "bg-green-100 text-green-800",
    };
  
    return (
      <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 mb-3 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-medium text-gray-800 dark:text-gray-100">{title}</h4>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor[status]}`}>
            {status}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Task details or notes go here.
        </p>
      </div>
    );
  };
  
  export default TaskCard;
  