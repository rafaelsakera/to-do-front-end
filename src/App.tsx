import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import ButtonAppBar from "./components/navBar/navBar";
import AllTasksPage from "./pages/allTasksPage/AllTasksPage";
import TodayTaskPage from "./pages/todayTasksPage/TodayTaskPage";
import FullSchedualPage from "./pages/fullSchedulePage/FullSchedualPage";
import TodaySchedulePage from "./pages/todaySchedulePage/todaySchedulePage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <ButtonAppBar />
        <Route exact path="/today-tasks" component={TodayTaskPage} />
        <Route exact path="/all-tasks" component={AllTasksPage} />
        <Route exact path="/today-schedule" component={TodaySchedulePage} />
        <Route exact path="/full-schedule" component={FullSchedualPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
