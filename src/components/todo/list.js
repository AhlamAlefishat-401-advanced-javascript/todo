import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoList({list,handleComplete}){
  console.log('ddd',list); 

  return (
    <ListGroup className="ul">
      {list.map(item => (
        <ListGroup.Item
          className={`complete-${item.complete.toString()} li ` }
          key={item._id}
        >
          <span onClick={() => handleComplete(item._id)}>
            {item.text}  By   {item.assignee} 
          </span>
          </ListGroup.Item>
      ))}
    </ListGroup>
  );
}




export default TodoList;
