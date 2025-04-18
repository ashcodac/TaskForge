# TaskForge - Productivity Dashboard

## Overview

TaskForge is a modern web application designed to enhance personal and team productivity through efficient task management. Inspired by Kanban methodologies, TaskForge provides a visual and intuitive way to organize tasks, track progress, and collaborate effectively. This project is currently under active development, with exciting features being added regularly.

## Features

* **Kanban-style Task Management:** Organize tasks into customizable boards and columns, reflecting different stages of the workflow.
* **Drag-and-Drop Functionality:** Easily move tasks between columns to update their status and prioritize work.
* **User Interface:**
    * Clean, modern, and intuitive design for a seamless user experience.
    * Dark mode support for comfortable use in various lighting conditions.
* **Task Lifecycle Management:**
    * Recycle bin for recovering accidentally deleted tasks, preventing data loss.
* **Full-Stack Architecture:**
    * Robust backend for secure data management and API interactions.
    * Efficient frontend for a dynamic and responsive user experience.

## Technologies Used

* **Frontend:** React.js, Vite, TailwindCSS
* **Backend:** FastAPI (Python), Flask (Python)
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Tokens)
* **Containerization:** Docker
* **CI/CD:** (In Progress)

## Planned Features (Coming Soon)

* **User Authentication and Authorization:** Secure user accounts with login, registration, and role-based access control.
* **Data Persistence:** Robust storage of tasks, boards, and user data using MongoDB.
* **Task Details:**
    * Task descriptions with rich text editing.
    * Due dates and reminders.
    * Task prioritization.
    * Subtasks.
    * File attachments.
* **Collaboration Features:**
    * User roles and permissions.
    * Task assignment.
    * Real-time updates.
    * Comments and discussions.
* **Advanced Features:**
    * Search and filtering.
    * Reporting and analytics.
    * Integrations with other productivity tools.

## Deployment

The application is currently deployed at:

* [TaskForge - Productivity Dashboard](https://taskforge-b98gekzoa-ashishsharma7s-projects.vercel.app/)

* **Note:** The deployment reflects the latest development state and may not include all planned features.

## Installation & Running Locally

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/ashcodac/taskforge.git](https://github.com/ashcodac/taskforge.git)
    ```

2.  **Navigate to the project folder:**

    ```bash
    cd taskforge
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd client # or frontend, depending on your folder structure
    npm install # or yarn install
    ```

4.  **Start the frontend development server:**

    ```bash
    npm run dev # or yarn dev
    ```

5.  **(Setup backend - instructions may vary depending on your backend setup)**

    * Install backend dependencies (e.g., `pip install -r requirements.txt` for Python).
    * Set up your MongoDB database and configure the connection string.
    * Run the backend server (e.g., `python main.py` or `flask run`).

6.  **Open the application in your browser:**

    * Frontend: Typically at `http://localhost:5173` (check your Vite output)
    * Backend: Typically at `http://localhost:5000` or similar (check your backend output)

## Contributing

Contributions are welcome! If you have ideas for new features, bug fixes, or improvements, please feel free to:

1.  Fork the repository.
2.  Create a new branch for your changes.
3.  Implement your changes.
4.  Submit a pull request.

Please follow the project's coding style and guidelines.

## License

This project is open-source and available under the [MIT License](LICENSE) (or specify the license you're using).
