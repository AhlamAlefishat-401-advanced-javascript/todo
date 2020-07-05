import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


function TodoForm(props) {
  const [item, setItem] = useState({});

  const handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
    console.log('item in change', item)

  };


  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    console.log('item in submit', item)
    const item1 = {};
    setItem(item1);
  };

  return (
    <>
      <h3>Add To Do Item</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Label>To Do Item
            <Form.Control name="text" type="text" placeholder="Item Details" onChange={handleInputChange} /></Form.Label>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Difficulty Rating
          <Form.Control type="range" defaultValue="1" min="1" max="5" name="difficulty" onChange={handleInputChange} /></Form.Label>
        </Form.Group>
        <Form.Label>Assigned To
            <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} /></Form.Label>
        <Button variant="primary" type="submit">
          Add Item
          </Button>

      </Form>

    </>
  );

}


export default TodoForm;