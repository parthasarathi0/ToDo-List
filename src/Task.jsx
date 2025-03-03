import React, { useState } from "react";
import Button from "react-bootstrap/Button";
const Task = ({ task }) => {
  const [completed, setCompleted] = useState([]);

  const handleRemove = (index) => {
    let newTasks = task.task.filter((e, i) => i !== index);
    task.settask(newTasks);
  };

  const handleComplete = (index) => {
    if (completed.includes(index)) {
      setCompleted(completed.filter((i) => i !== index));
    } else {
      setCompleted([...completed, index]);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "30px" }}>
        TO-DO LIST
      </h1>
      <h2 style={{ textAlign: "center", marginTop: "20px", fontSize: "30px" }}>
        Your Tasks
      </h2>
      {task.task.length == 0 ? (
        <p style={{ textAlign: "center", marginTop: "50px", fontSize: "30px" }}>
          No task is added
        </p>
      ) : (
        <div
          class="overflow-auto"
          style={{
            border: "1px solid black",
            textAlign: "center",
            width: "550px",
            marginLeft: "130px",
            backgroundColor: "pink",
            borderRadius: "10px",
            border: "none",
            maxHeight: "200px",
          }}
        >
          <ul>
            {task.task.map((element, index) => (
              <li key={index}>
                {index + 1 + "."}
                <span
                  style={{
                    textDecoration: completed.includes(index)
                      ? "line-through"
                      : "none",
                  }}
                >
                  {element}
                </span>

                <Button
                  variant="warning"
                  onClick={() => handleComplete(index)}
                  style={{
                    marginLeft: "80px",
                    border: "1px solid brown",
                    borderRadius: "10px",
                    marginTop: "10px",
                  }}
                >
                  {completed.includes(index) ? "Undo" : "Completed"}
                </Button>

                <Button
                  variant="danger"
                  onClick={() => handleRemove(index)}
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    border: "1px solid brown",
                    borderRadius: "10px",
                  }}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Task;
