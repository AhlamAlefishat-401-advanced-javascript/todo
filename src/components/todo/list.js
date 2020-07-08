import React, { useState, useEffect } from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoList({list,handleComplete,handleDelete}){
  console.log('ddd',list); 

  return (
    
    <Container  className="ul">
       {list.map(item => (
         <Container className="li"  key={item._id}>
            <Row className="firstRow">
                <Col  key={item._id} className={`complete-${item.complete}`}  onClick={() => handleComplete(item._id)}>
                   {item.complete}
                 </Col>
                <Col> {item.assignee} </Col>
                <Col className="text-end">
                 <button onClick={() => handleDelete(item._id)}>x</button>
                </Col>
            </Row>
            <Row>
            <Col md="auto">
              {item.text} 
              </Col>
            </Row>
            <Row className="text-end">
            <Col md={{ span: 9, offset: 3 }}> Difficulty : {item.difficulty}</Col>

            </Row>
        </Container>
       ))}
    </Container>
    );
  }
  
  
  
  
  export default TodoList;
