function TaskColumn({ title, children }) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md min-h-[70vh] transition-transform duration-200 hover:scale-[1.01] hover:shadow-xl">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">{title}</h3>
        {children}
      </div>
    );
  }
  
  export default TaskColumn;
  