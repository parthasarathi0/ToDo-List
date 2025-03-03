import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AddTask from "./AddTask";
import Home from "./Home";
import Task from "./Task";
import "./App.css";
import Button from "react-bootstrap/Button";
const Nav = () => {
  const [task, settask] = useState([]);

  return (
    <div id="nav">
      <BrowserRouter>
        <ul>
          <Button variant="primary" id="li">
            <Link to="/Home" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </Button>

          <Button variant="primary" id="li1">
            <Link to="/Task" style={{ textDecoration: "none", color: "white" }}>
              Task
            </Link>
          </Button>

          <Button variant="primary" id="li2">
            <Link
              to="/AddTask"
              style={{ textDecoration: "none", color: "white" }}
            >
              AddTask
            </Link>
          </Button>
        </ul>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Task" element={<Task task={{ task, settask }} />} />
          <Route
            path="/AddTask"
            element={<AddTask task={{ task, settask }} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Nav;
