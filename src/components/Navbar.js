import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavMenu = () => {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">HOME</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/orders/new">Order</Nav.Link>
      <Nav.Link href="/orders">Past Orders</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )}

export default NavMenu