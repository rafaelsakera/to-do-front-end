import React from "react";
import "./App.css";

import axios from "axios";

import useToken from "./hooks/UseToken";
import { BrowserRouter, Route } from "react-router-dom";

import ButtonAppBar from "./components/navBar/navBar";

import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import AllTasksPage from "./pages/allTasksPage/AllTasksPage";
import TodayTaskPage from "./pages/todayTasksPage/TodayTaskPage";
import FullSchedualPage from "./pages/fullSchedulePage/FullSchedualPage";
import TodaySchedulePage from "./pages/todaySchedulePage/todaySchedulePage";

const App: React.FC = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <LoginPage setToken={setToken} />;
  }

  axios.defaults.headers.common["auth-token"] = token;

  return (
    <BrowserRouter>
      <div className="App">
        <ButtonAppBar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/today-tasks" component={TodayTaskPage} />
        <Route exact path="/all-tasks" component={AllTasksPage} />
        <Route exact path="/today-schedule" component={TodaySchedulePage} />
        <Route exact path="/full-schedule" component={FullSchedualPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
