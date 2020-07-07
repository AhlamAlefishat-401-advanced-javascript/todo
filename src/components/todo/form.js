import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import useForm from '../hooks/form-hook.js';
function TodoForm(props) {
  const [handleSubmit, handleChange, item] = useForm(handleForm);
  function handleForm(item){
    props.handleSubmit(item);
  }
  return (
    <>
      <h3>Add To Do Item</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Label>To Do Item
            <Form.Control name="text" type="text" placeholder="Item Details" onChange={handleChange} required /></Form.Label>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Difficulty Rating
          <Form.Control type="range" defaultValue="1" min="1" max="5" name="difficulty" onChange={handleChange} required /></Form.Label>
        </Form.Group>
        <Form.Label>Assigned To
            <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleChange} required /></Form.Label>
        <Button variant="primary" type="submit">
          Add Item
          </Button>
      </Form>
    </>
  );
}
export default TodoForm;