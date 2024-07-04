import React, { createContext, useState, ReactNode } from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";

interface NotificationContextProps {
  showNotification: (message: string, severity?: AlertColor) => void;
}

export const NotificationContext = createContext<NotificationContextProps>({
  showNotification: () => null,
});

const NotificationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("success");

  const showNotification = (
    message: string,
    severity: AlertColor = "success"
  ) => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
