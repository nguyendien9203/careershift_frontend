import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/global.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import AuthProvider from "./contexts/AuthContext";
import AppRouter from "./routes/AppRouter";

const App: React.FC = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <AppRouter />
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
