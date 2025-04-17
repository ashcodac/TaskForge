import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskBoard from './components/TaskBoard';
import BinPage from './components/BinPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <main className="p-4 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<TaskBoard />} />
          <Route path="/bin" element={<BinPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
