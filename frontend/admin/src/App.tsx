import React from "react";

import "./styles/global.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import AuthProvider from "./contexts/AuthContext";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return (
    <div className="App">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
};

export default App;
