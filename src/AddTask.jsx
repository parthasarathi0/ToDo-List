import React, { useState } from "react";
import Button from "react-bootstrap/Button";
const AddTask = ({ task }) => {
  const [tasks, settasks] = useState("");

  const handleEvent = (element) => {
    settasks(element.target.value);
  };

  const handle = () => {
    if (tasks !== "") {
      alert("Task added successfully");
      task.settask([...task.task, tasks]);
      console.log(task.task);
      settasks("");
    } else {
      alert("Please enter the task");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "30px" }}>
        TO-DO LIST
      </h1>
      <h2 style={{ textAlign: "center", marginTop: "20px", fontSize: "30px" }}>
        Add a New Task
      </h2>
      <input
        type="text"
        style={{ marginLeft: "300px", marginTop: "20px", borderRadius: "5px" }}
        value={tasks}
        placeholder="Enter tasks"
        onChange={handleEvent}
      />
      <div>
        <Button
          variant="success"
          style={{ marginLeft: "300px", width: "170px", marginTop: "20px" }}
          onClick={handle}
        >
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default AddTask;
