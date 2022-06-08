import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair

  const [task, settask]=useState([])

  const handlesubmit =(e)=>
    {
            e.preventDefault();
            console.log(task)
            fetch("http://localhost:8080/tasks",{
                  method: "POST",
                  headers: {
                      "content-type" : "application/json"
                  },
                  body: JSON.stringify(task)
              })
    
    
    }
    const handlechange =(e)=>{
      const {name,value}=e.target

      settask({
          ...task,
          [name]:value
      })
  }

  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" name="text" onChange={handlechange}/>
      <button data-testid="add-task-button" onSubmit={handlesubmit}>Add Task</button>
    </div>
  );
};

export default AddTask;
