import React from "react";

import "./styles/global.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { NotificationProvider } from "./contexts/NotificationContext";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return (
    <div className="App">
      <NotificationProvider>
        <AppRoutes />
      </NotificationProvider>
    </div>
  );
};

export default App;
