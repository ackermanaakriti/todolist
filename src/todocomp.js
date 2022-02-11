import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
 function Todocomp() {
    const [enteredTask,SetMytask] = useState('');
    const [Task_to_be_stored,SetStore]= useState([]);
    const TextUpdate=(e)=>
    { 
    SetMytask(e.target.value);
    }
    
    const Addvalue=()=>
    {
        console.log("hello ello");
  const TaskHolder=[enteredTask];
  SetStore([...Task_to_be_stored,TaskHolder]);
    }
    const Myline=()=>
    {

    }
  return (
    <>
    <h1>My todo list</h1>
    <div>
        <label  htmlFor="myinput">what is to be done? </label> <br/>
        <input className="enter" onChange={TextUpdate} id="myinput"type="text" value={enteredTask}placeholder="enter your task here"/>
       <h3> <FontAwesomeIcon icon={faCirclePlus} onClick={Addvalue}/> </h3>
      <div>
          <h3>your todo list</h3>
          <div >
             <p>{Task_to_be_stored}</p>
            
         </div>
          </div>
      </div>
    
    </>
  )
}
export default Todocomp;