import React, { useEffect, useState } from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  

  const [result,setresult] = useState([])
  const [uncomplete,setcomplete]=useState([])

  let totalTask = result.length;
  let unCompletedTask = uncomplete.length;
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
const count=()=>{
  {result.filter(e=>(
    e.done===false
  ))
  setcomplete(result)
  }
}

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <b data-testid="header-remaining-task">{unCompletedTask}</b>
      <b data-testid="header-total-task">totalTask-->{totalTask}</b>
    </div>
  );
};

export default TaskHeader;
