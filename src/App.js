import React from "react";
import {AddTask} from "../src/components/AddTask"
import Counter from "./components/Counter/Counter";
import TaskHeader from "./components/TaskHeader/TaskHeader";
import Tasks from "./components/Tasks/Tasks";
function App() {
  return <div>
<AddTask/>
<Counter/>
<Tasks/>
<TaskHeader/>
  </div>;
}

export default App;
