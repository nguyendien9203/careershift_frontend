import React, { useEffect } from "react";

interface Notification {
  id: number;
  type: string;
  message: string;
  icon: string;
}

interface NotificationListProps {
  notifications: Notification[];
  removeNotification: (id: number) => void;
}

const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
  removeNotification,
}) => {
    
  useEffect(() => {
    notifications.forEach((notification) => {
      const timer = setTimeout(() => {
        removeNotification(notification.id);
      }, 5000);
      return () => clearTimeout(timer);
    });
  }, [notifications, removeNotification]);

  return (
    <div className="notification-container fixed top-0 left-1/2 transform -translate-x-1/2 p-2.5 space-y-2 z-50 max-w-[440px] w-full">
      {notifications.map((notification, index) => (
        <div
          key={index}
          className="notification-item p-2.5 rounded-[5px] bg-white text-black font-normal flex justify-center items-start shadow-md gap-2"
        >
          <i
            className={`bi ${notification.icon} text-base ${
              notification.type === "success"
                ? "text-success-500"
                : notification.type === "error"
                ? "text-danger-500"
                : "text-primary-500"
            }`}
          />
          <span>{notification.message}</span>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
