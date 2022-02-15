import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import{faXmarkCircle} from '@fortawesome/free-solid-svg-icons'
 function Todocomp() {
    const [enteredTask,SetMytask] = useState('');
    const [task_stored,SetStore]= useState([]);
    const SetmyValueNull=()=>
    {
      console.log('hwllo world');
   SetMytask([]);
   
    }
    const TextUpdate=(e)=>
    { 
    SetMytask(e.target.value);
    }
    const Addvalue=()=>
    {  
  SetStore((olditems)=>
  {
      return[...olditems,enteredTask]
  })
  SetMytask(""); }
 
    return (
    <>
    <h1>My todo list</h1>
    <div className="mainContainer">
        <label className="labelname"  htmlFor="myinput">What is to be done? </label> <br/>
       <div className="divinside"> <input className="enter" onChange={TextUpdate} id="myinput"type="text" value={enteredTask}placeholder="enter your task here"/>
       <h3 className="addButton"> <FontAwesomeIcon icon={faCirclePlus} onClick={Addvalue}/> </h3></div>
      <div>
          <h3>your todo list</h3>
          <div  className="showContainer">
              {
              task_stored.map((mytasks)=>{
                return <div className="mylists">  <li>{mytasks}</li> <button onClick={SetmyValueNull}><FontAwesomeIcon icon={faXmarkCircle}/></button></div>
              }) }'
         </div>
         </div>
      </div>
     </>
  )
}
export default Todocomp;