import React, { useEffect, useState } from "react";
import styles from "./tasks.module.css";

const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair


  const [result,setresult] = useState([])

  useEffect(()=> 
  {
     bulao()
  },[])
  const bulao = async()=>
  {
      let data = await fetch("http://localhost:8080/tasks")
      let res = await data.json()
      console.log(res)
     setresult(res)
  }
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
     {result.map((e)=>{
       <li>{e.text}</li>
     })}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
