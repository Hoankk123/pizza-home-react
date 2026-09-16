import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// Exercise 10: Demo about React-Bootstrap
// Rebuilds the "Simple Website" from Exercise 9 (Header + About + Contact + Footer)
// using React-Bootstrap components instead of plain HTML/CSS.

function BootstrapHeader() {
  return (
    <Navbar bg="warning" variant="light" expand="lg" className="px-3">
      <Container fluid className="d-flex flex-column">
        <Navbar.Brand href="#home" className="fw-bold mb-2">
          FPT Education · FPT University
        </Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function BootstrapAbout() {
  return (
    <Row className="justify-content-center text-center py-4" id="about">
      <Col md={8}>
        <Card body className="border-0 bg-transparent">
          <h2 className="h5 fw-bold">About</h2>
          <p className="text-muted mb-0">
            This is the about section of the website.
          </p>
        </Card>
      </Col>
    </Row>
  );
}

function BootstrapContact() {
  return (
    <Row className="justify-content-center text-center py-4" id="contact">
      <Col md={8}>
        <Card body className="border-0 bg-transparent">
          <h2 className="h5 fw-bold">Contact</h2>
          <p className="text-muted mb-0">
            For any inquiries, please contact us at example@example.com.
          </p>
        </Card>
      </Col>
    </Row>
  );
}

function BootstrapFooter() {
  return (
    <div className="bg-warning bg-opacity-50 text-white text-center py-2 small">
      &copy; {new Date().getFullYear()} Website. All rights reserved.
    </div>
  );
}

function BootstrapWebsite() {
  return (
    <div className="border rounded overflow-hidden">
      <BootstrapHeader />
      <Container>
        <BootstrapAbout />
        <BootstrapContact />
      </Container>
      <BootstrapFooter />
    </div>
  );
}

export default BootstrapWebsite;
