import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { useAuth } from "./contex/authContext";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Only show Register page if not authenticated */}
        <Route
          path="/"
          element={!isAuthenticated ? <Register /> : <Navigate to="/login" />}
        />

        {/* Show Login page if not authenticated, otherwise redirect to Dashboard */}
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />}
        />

        {/* Only show Dashboard if authenticated */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />

        {/* Redirect any unknown routes to login page */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>

      {/* Toast container for displaying notifications */}
      <ToastContainer />
    </Router>
  );
};

export default App;
