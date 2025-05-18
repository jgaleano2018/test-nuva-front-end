import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Task from "./components/task/task.component";
import AddTask from "./components/task/add-task.component";
import UpdateTask from "./components/task/edit-task.component";

class App extends Component {
  render() {
    return (
      <div>
         <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/user" className="navbar-brand">
            Users
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/components/task/task"} className="nav-link">
                Tasks
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Task/>} />
            <Route path="/components/task/task" element={<Task/>} />
            <Route path="/components/task/add" element={<AddTask/>} />
            <Route path="/components/task/update/:id" element={<UpdateTask/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;