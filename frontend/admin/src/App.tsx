import React from "react";

import "./styles/global.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
};

export default App;
