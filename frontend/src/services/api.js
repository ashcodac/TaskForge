// Fetch all tasks from the backend
export const getTasks = async () => {
  try {
    const response = await fetch('/tasks');
    
    // Check if the response is not ok
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

// Add a new task to the backend
export const addTask = async (task) => {
  try {
    const response = await fetch('/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error('Failed to add task');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

// Update a task on the backend
export const updateTask = async (taskId, updatedTask) => {
  try {
    const response = await fetch(`/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });

    if (!response.ok) {
      throw new Error('Failed to update task');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

// Soft delete a task on the backend
export const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`/tasks/${taskId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete task');
    }

    return { message: 'Task deleted successfully' };
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

// Permanently delete a task (DELETE)
export const permanentDeleteTask = async (taskId) => {
  try {
    const response = await fetch(`/tasks/${taskId}/permanent`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to permanently delete task');
    }

    return { message: 'Task permanently deleted' };
  } catch (error) {
    console.error("Error permanently deleting task:", error);
    throw error;
  }
};
