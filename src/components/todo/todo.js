import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Header from './header.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


import './todo.scss';

function ToDo() {
  const [todo, setTodo] = useState([]);


  useEffect(() => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];
    setTodo(list);
  }, []);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setTodo([...todo, item]);
  };


  const toggleComplete = id => {

    let item = todo.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list = todo.map(listItem => listItem._id === item._id ? item : listItem);
      setTodo(list);
    }

  };

  return (
    <>
      <header>
        <Header />
      </header>
      <Container>
        <Row className="justify-content-md-center">
          <Col><h2>
          To Do List Manager ({todo.filter(item => !item.complete).length})
        </h2></Col>
        </Row>
        <Row className="todo">
          <Col> 
           <div>
          <TodoForm handleSubmit={addItem} />
        </div></Col>
          <Col >
          <div>
          <TodoList
            list={todo}
            handleComplete={toggleComplete}
          />
        </div>
          </Col>
        </Row>
      </Container>
    </>
  );





}




export default ToDo; 