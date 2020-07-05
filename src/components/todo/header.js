import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){

  return (
      <header>
           <Navbar bg="primary" variant="light">
                    <Navbar.Brand >Home</Navbar.Brand>
                </Navbar>
      </header>

  );
}




export default Header;