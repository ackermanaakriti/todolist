import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

const Mymain = (props) => {
  return <>
    <h1>My todo list</h1>
    <div className="mainContainer">
      <label className="labelname" htmlFor="myinput">What is to be done? </label> <br />
      <div className="divinside"> <input className="enter" onChange={props.func.func2} id="myinput" type="text" value={props.value.entered} placeholder="enter your task here" />
        <h3 className="addButton"> <FontAwesomeIcon icon={faCirclePlus} onClick={props.func.func5} /> </h3></div>
      <div>
        <h3>your todo list</h3>
        <div className="showContainer">
          {
            props.value.stored.map((mytasks, index) => {
              return <div  className="mylists">  
              <li key={index}className="myfirstli">{mytasks}</li> 
              <button onClick={() => props.func.func1}>
                <FontAwesomeIcon icon={faXmarkCircle} /></button></div>
            })}'
        </div>
      </div>
    </div>
  </>
}
export default Mymain;