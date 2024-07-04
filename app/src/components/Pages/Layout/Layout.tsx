import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import "./Layout.scss";
import QuestionContext from "../../../context/QuestionContext";
import NotificationProvider from "../../../context/NotificationContext";

const Layout: React.FC = () => {
  return (
    <NotificationProvider>
      <QuestionContext>
        <Header />
        <div className="p-5">
          <Outlet />
        </div>
      </QuestionContext>
    </NotificationProvider>
  );
};

export default Layout;
