import React from 'react';
import { useState } from 'react';

import Mymain from './main';
 function Todocomp() {
    const [enteredTask,SetMytask] = useState('');
    const [task_stored,SetStore]= useState([]);
    
   
    const SetmyValueNull=(id)=>
    {
        console.log(id);
        console.log('hello');
      const updatedvalue= task_stored.filter((currel, ind)=>
      {
        return ind!==id;
      })
      SetMytask(updatedvalue);

     };
     
    
    const TextUpdate=(e)=>
    { 
    SetMytask(e.target.value);
    }
    const Addvalue=()=>
    {  console.log("this is hell");
  SetStore((olditems)=>
  {
      return[...olditems,enteredTask]
      
  })
  SetMytask(""); };
     const myfunction={ func1:SetmyValueNull, func2:TextUpdate, func3:SetStore, fun4:SetMytask ,func5:Addvalue}
     const myvalue={ stored:task_stored, entered:enteredTask}
    return (
    <>
    <Mymain func= {myfunction}  value={myvalue}/>
     </>
  )
}
export default Todocomp;