import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { MdOutlineSupportAgent } from 'react-icons/md';
import contactImg from '../Admin/Image/ph1.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  return (
    <div style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)', padding: '80px 0' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark mb-3" style={{ fontSize: '2.8rem', letterSpacing: '1px' }}>
            Contact Us
          </h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Have questions or need assistance? We're here to help. Reach out to us through any of these channels.
          </p>
        </div>

        <Card className="mb-5 border-0 shadow-lg overflow-hidden rounded-4">
          <Row className="g-0">
            <Col md={6} className="d-none d-md-block position-relative">
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 98, 204, 0.2)',
                zIndex: 1
              }}></div>
              <img
                src={contactImg}
                alt="Contact Us"
                className="img-fluid h-100 w-100"
                style={{ objectFit: 'cover', minHeight: '500px' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                zIndex: 2,
                color: 'white'
              }}>
                <MdOutlineSupportAgent size={40} className="mb-3" />
                <h3 className="fw-bold mb-3">Customer Support</h3>
                <p className="mb-0" style={{ maxWidth: '80%' }}>Our team is ready to assist you with any inquiries you may have.</p>
              </div>
            </Col>

            <Col xs={12} md={6} className="p-4 p-lg-5 bg-white">
              <h4 className="fw-bold mb-4" style={{ color: '#0062cc' }}>Send Us a Message</h4>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label className="fw-semibold">Your Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Enter your name" 
                        required 
                        className="py-2"
                        style={{ borderLeft: '3px solid #0062cc' }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label className="fw-semibold">Email Address</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="Enter your email" 
                        required 
                        className="py-2"
                        style={{ borderLeft: '3px solid #0062cc' }}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label className="fw-semibold">Phone Number</Form.Label>
                  <Form.Control 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    required 
                    className="py-2"
                    style={{ borderLeft: '3px solid #0062cc' }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="subject">
                  <Form.Label className="fw-semibold">Subject</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="What's this about?" 
                    required 
                    className="py-2"
                    style={{ borderLeft: '3px solid #0062cc' }}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="message">
                  <Form.Label className="fw-semibold">Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="Your message here..." 
                    required 
                    className="py-2"
                    style={{ borderLeft: '3px solid #0062cc' }}
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 fw-bold py-3"
                  style={{
                    background: 'linear-gradient(90deg, #0062cc 0%, #004a99 100%)',
                    border: 'none',
                    fontSize: '1.1rem'
                  }}
                >
                  <FaPaperPlane className="me-2" />
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Card>

        <Row className="g-4 justify-content-center">
          <Col xs={12} md={4}>
            <Card className="h-100 border-0 shadow-sm rounded-4 p-4 text-center hover-effect">
              <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle mx-auto mb-4" 
                style={{ width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FaPhone className="text-primary fs-4" />
              </div>
              <h5 className="fw-bold mb-3">Call Us</h5>
              <p className="text-muted mb-3">Speak directly with our team</p>
              <p className="fw-semibold mb-0">+91 9106089227</p>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="h-100 border-0 shadow-sm rounded-4 p-4 text-center hover-effect">
              <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle mx-auto mb-4" 
                style={{ width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FaEnvelope className="text-primary fs-4" />
              </div>
              <h5 className="fw-bold mb-3">Email Us</h5>
              <p className="text-muted mb-3">Send us an email anytime</p>
              <p className="fw-semibold mb-0">karankhalas@gmail.com</p>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="h-100 border-0 shadow-sm rounded-4 p-4 text-center hover-effect">
              <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle mx-auto mb-4" 
                style={{ width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FaMapMarkerAlt className="text-primary fs-4" />
              </div>
              <h5 className="fw-bold mb-3">Visit Us</h5>
              <p className="text-muted mb-3">Come see us in person</p>
              <p className="fw-semibold mb-0">Mukhwas Gali, Manekchok, Ahmedabad</p>
            </Card>
          </Col>
        </Row>

        <style jsx="true">{`
          .hover-effect {
            transition: all 0.3s ease;
          }
          .hover-effect:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
          }
          .rounded-4 {
            border-radius: 16px !important;
          }
        `}</style>
      </Container>
    </div>
  );
};

export default ContactUs;
