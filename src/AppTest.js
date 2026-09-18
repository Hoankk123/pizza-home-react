import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from "./image/logo.jpg";
import banner1 from "./image/logo1.jpg";
import p1 from "./image/pizza1.jpg";
import p2 from "./image/pizza2.jpg";
import p3 from "./image/pizza3.jpg";
import p4 from "./image/pizza4.jpg";
import {
  Button,
  Carousel,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Ex10 from "./slot4/Ex10";

function AppTest() {
  const pizza = [
    {
      id: 1,
      name: "Pizza 1",
      price: "$10.0",
      image: p1,
    },
    {
      id: 2,
      name: "Pizza 2",
      price: "$18.8",
      image: p2,
    },
    {
      id: 3,
      name: "Pizza 3",
      price: "$10.9",
      image: p3,
    },
    {
      id: 4,
      name: "Pizza 4",
      price: "$30.9",
      image: p4,
    },
  ];
  return (
    <div
      style={{ backgroundColor: "#121212", color: "white", minHeight: "100vh" }}
    >
      <Navbar bg="dark" variant="dark" expand="lg" className="px-4">
        <Container fluid>
          <Navbar.Brand href="#">Pizza Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About Us </Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                <FaSearch />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ///////////////////////////////////////////////////////// */}

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Pizza Banner"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Neapolitan Pizza</h3>
            <p>
              If you are looking for traditional Italian pizza, the Neapolitan
              is the best choice.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="Pizza Banner"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Neapolitan Pizza</h3>
            <p>
              If you are looking for traditional Italian pizza, the Neapolitan
              is the best choice.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* ///////////////////////////////////////////////////////// */}

      <Container className="mt-5">
        <h2>OUR MENU</h2>
        <Row>
          {pizza.map((pizza) => (
            <Col md={3} sm={6} key={pizza.id}>
              <p>
                <Ex10 pizza={pizza} />
              </p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ///////////////////////////////////////////////////////// */}
      <Container className="mt-5 pb-5">
        <h2 className="text-center mb-4">Book Your Table</h2>
        <Form>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name *" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your Email *" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Select className="mb-3">
                <option>Select a Service</option>
                <option value="1">Dine-in</option>
                <option value="2">Takeaway</option>
              </Form.Select>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Please write your comment"
            />
          </Form.Group>
          <Button variant="warning" type="submit">
            Send Message
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AppTest;
