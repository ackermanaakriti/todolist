import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';



 function Todocomp() {
    const [MYtask,SetMytask] = useState('');
    const [myStore,SetStore]= useState([]);
    const Myupdate=(e)=>
    { 
    SetMytask(e.target.value);
    }
    
    const Addvalue=()=>
    {
        console.log("hello ello");
  const newTask=[MYtask];
  SetStore([...myStore,newTask]);
    }
    const Myline=()=>
    {
        
    }
  return (
    <>
    <h1>My todo list</h1>
    <div>
        <label  htmlFor="myinput">what is to be done? </label> <br/>
        <input className="enter" onChange={Myupdate} id="myinput"type="text" value={MYtask}placeholder="enter your task here"/>
       <h3> <FontAwesomeIcon icon={faCirclePlus} onClick={Addvalue}/> </h3>
      <div>
          <p>your todo list</p>
          <div >
             
                 
                         <p>{myStore}</p>
                         
                         </div>
                     
                 
            
              

          </div>
      </div>
    
    </>
  )
}
export default Todocomp;