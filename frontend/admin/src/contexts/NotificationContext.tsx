import React, { createContext, useContext, useState, ReactNode } from "react";

import NotificationList from "../components/common/NotificationList";

interface NotificationContextType {
  message: {
    error: (msg: string) => void;
    success: (msg: string) => void;
    info: (msg: string) => void;
  };
  notifications: { id: number; type: string; message: string; icon: string }[];
  removeNotification: (id: number) => void;
}

interface NotificationProviderProps {
  children: ReactNode;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<
    { id: number; type: string; message: string; icon: string }[]
  >([]);

  const addNotification = (
    type: "error" | "success" | "info",
    message: string
  ) => {
    const id = Date.now();
    const icon = getIconByType(type);
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { id, type, message, icon },
    ]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const getIconByType = (type: "error" | "success" | "info") => {
    switch (type) {
      case "error":
        return "bi-x-circle-fill";
      case "success":
        return "bi-check-circle-fill";
      case "info":
        return "bi-exclamation-circle-fill";
      default:
        return "bi-exclamation-circle-fill";
    }
  };

  const message = {
    error: (msg: string) => addNotification("error", msg),
    success: (msg: string) => addNotification("success", msg),
    info: (msg: string) => addNotification("info", msg),
  };

  return (
    <NotificationContext.Provider
      value={{ message, notifications, removeNotification }}
    >
      {children}
      <NotificationList
        notifications={notifications}
        removeNotification={removeNotification}
      />
    </NotificationContext.Provider>
  );
};

export const useNotifications = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationProvider"
    );
  }
  return context;
};

export default NotificationContext;
