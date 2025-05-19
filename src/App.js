import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Task from "./components/tasks/task.component";
import AddTask from "./components/tasks/add-task.component";
import UpdateTask from "./components/tasks/edit-task.component";

class App extends Component {
  render() {
    return (
      <div>
         <nav className="navbar navbar-expand navbar-dark bg-dark">         
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/components/tasks/task"} className="nav-link navbar-brand">
                Tasks
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Task/>} />
            <Route path="/components/tasks/task" element={<Task/>} />
            <Route path="/components/tasks/add" element={<AddTask/>} />
            <Route path="/components/tasks/update/:id" element={<UpdateTask/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;