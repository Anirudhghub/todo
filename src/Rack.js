import React, { useState } from 'react';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { Showselected, Addbook, DeleteBook, RemoveBook, Taskcompleted } from './action';

function Rack() {
  let input1 = React.createRef(),
    input2 = React.createRef(),
    input3 = React.createRef();
  const dispatcher = useDispatch();
  let dis = useSelector(state => state);
  console.log(dis);
  let handle = (e) => {

    dispatcher(Addbook(input1.current.value, input2.current.value, input3.current.value));
    input1.current.value = '';
    input2.current.value = '';
    input3.current.value = '';
  }
  return (<div>
     <div className="container">
    <div className="Rack">
    <h3 className="tasks">Tasks:</h3>
        <ol>
        {dis.map((element, index) => {

      return (<li key={element.id} onClick={() => dispatcher(Showselected(element.id))}>
        {element.Task}
        </li>);
    })}
        </ol>
    </div>
    <div className="add-book">
    <h2>Add Task</h2>
    
    Task:<input type="text" required  ref={input1} /><br/>
    Alloted to  :<input type="text" required  ref={input2} /><br/>
    Date   :<input type="date" required  ref={input3} /><br/>
    <button onClick={handle}>Submit</button>
    
    </div>
    </div>
    <div className="Usercart">
        <h1><u>Detailed information of tasks</u></h1>
    <div className="sectionwise">
    <fieldset className="book-display">
            <legend>Completed</legend>
   { dis.map((element, index) => {
      if (element.display === true && element.flag === true) {
        console.log(element);
        return (<fieldset>
          <a href="#" onClick={() => dispatcher(DeleteBook(element.id))} className="deletebutton">Delete</a>
                <p>Task :{element.Task}<span><a href="#" onClick={() => dispatcher(RemoveBook(element.id))}>Close X</a></span></p>
                <p>Alloted to :{element.Allotedto}</p>
                <p>Date :{element.date}</p>
                </fieldset>
          );
      }

    })}
 </fieldset>
 </div>
 <div className="sectionwise">
 <fieldset className="book-display">
            <legend>Pending</legend>
   { dis.map((element, index) => {
      if (element.display === true && element.flag === false) {
        console.log(element);
        return (<fieldset>
          <a href="#" onClick={() => dispatcher(DeleteBook(element.id))} className="deletebutton">Delete</a>
          <a href="#" className="completebutton" onClick={() => dispatcher(Taskcompleted(element.id))}>Completed</a>
                <p>Task :{element.Task}<span><a href="#" onClick={() => dispatcher(RemoveBook(element.id))}>Close X</a></span></p>
                <p>Alloted to :{element.Allotedto}</p>
                <p>Date :{element.date}</p>
                </fieldset>
          );
      }

    })}
 </fieldset>
 </div>
    </div>
    </div>
    );
}

export default Rack;