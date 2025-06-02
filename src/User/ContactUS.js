import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contactImg from '../Admin/Image/ph1.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  return (
    <div style={{ background: '#f5f5f5', padding: '60px 0' }}>
      <Container>
        <h2 className="text-center fw-bold text-dark mb-5" style={{ fontSize: '2.5rem' }}>
          Get in Touch
        </h2>

        {/* Card Layout with Form and Image */}
        <Card className="mb-5 border-0 shadow-lg overflow-hidden rounded-4">
          <Row className="g-0">
            {/* Image Section */}
            <Col md={6} className="d-none d-md-block">
              <img
                src={contactImg}
                alt="Contact Us"
                className="img-fluid h-100 w-100"
                style={{ objectFit: 'cover', height: '100%' }}
              />
            </Col>

            {/* Form Section */}
            <Col xs={12} md={6} className="p-5">
              <h4 className="fw-bold mb-4">Send Us a Message</h4>
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control type="tel" placeholder="Enter your phone number" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Your message" required />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 fw-bold py-2">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Card>

        {/* Contact Info */}
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="p-4 shadow-sm bg-white border-0 rounded-4">
              <h5 className="fw-bold mb-4">Or Reach Us Directly</h5>
              <Row>
                <Col xs={12} md={4} className="d-flex align-items-center mb-3">
                  <FaPhone className="text-primary me-3 fs-5" />
                  <span>+91 9106089227</span>
                </Col>
                <Col xs={12} md={4} className="d-flex align-items-center mb-3">
                  <FaEnvelope className="text-primary me-3 fs-5" />
                  <span>karankhalas@gmail.com</span>
                </Col>
                <Col xs={12} md={4} className="d-flex align-items-center mb-3">
                  <FaMapMarkerAlt className="text-primary me-3 fs-5" />
                  <span>Mukhwas Gali, Manekchok, Ahmedabad</span>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
