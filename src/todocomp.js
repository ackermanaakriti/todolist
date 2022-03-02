import React from 'react';
import { useState } from 'react';

import Mymain from './main';
 function Todocomp() {
    const [enteredTask,SetMytask] = useState('');
    const [task_stored,SetStore]= useState([]);
    
   
    const SetmyValueNull=()=>
    {
     const mylists= document.getElementById('myfirstli');
     mylists.remove();

      console.log('hello world');
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
     const myfunction={ func1:SetmyValueNull, func2:TextUpdate, func3:SetStore, fun4:SetMytask ,func5:Addvalue}
     const myvalue={ stored:task_stored, entered:enteredTask}
    return (
    <>
    <Mymain func= {myfunction}  value={myvalue}/>
     </>
  )
}
export default Todocomp;