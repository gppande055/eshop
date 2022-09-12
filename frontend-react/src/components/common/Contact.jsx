import React, { Component, Fragment } from "react";
import classes from "./Contact.module.css";
import {
  Container,
  Breadcrumb,
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import Validation from "../../validation/Validation";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  nameOnChange = (event) => {
    let enteredName = event.target.value;
    // alert(name);
    this.setState({ name: enteredName });
  };
  emailOnChange = (event) => {
    let enteredEmail = event.target.value;
    // alert(email);
    this.setState({ email: enteredEmail });
  };
  messageOnChange = (event) => {
    let enteredMessage = event.target.value;
    // alert(message);
    this.setState({ message: enteredMessage });
  };

  contactFormHandler = (event) => {
    event.preventDefault();
    let enteredName = this.state.name;
    let enteredEmail = this.state.email;
    let enteredMessage = this.state.message;
    let sendBtn = document.getElementById("sendBtn");
    let contactForm = document.getElementById("contactForm");

    // Validation
    if (enteredName.length === 0) {
      toast.error("Name field is Required!");
      sendBtn.innerHTML = "Sent";
    } else if (enteredEmail.length === 0) {
      toast.error("Email field is Required");
      sendBtn.innerHTML = "Sent";
    } else if (enteredMessage.length === 0) {
      toast.error("Message field is Required!");
      sendBtn.innerHTML = "Sent";
      // alert("Please Write your Message");
    } else if (!Validation.NameRegex.test(enteredName)) {
      toast.error("Invalid Name Characters");
      sendBtn.innerHTML = "Sent";
    } else {
      // Inserting Data
      let ContactFormData = new FormData();
      ContactFormData.append("name", enteredName);
      ContactFormData.append("email", enteredEmail);
      ContactFormData.append("message", enteredMessage);
      sendBtn.innerHTML = "Sending...";

      axios
        .post(AppURL.PostContact, ContactFormData)
        .then(function (response) {
          if (response.status === 200 && response.data === 1) {
            toast.success("Message sent successfully");
            sendBtn.innerHTML = "Sent";
            contactForm.reset();
          } else {
            toast.error("error");
          }
        })
        .catch(function (error) {
          toast.error(error);
          sendBtn.innerHTML = "Sent";
        });
    }
  };

  render() {
    return (
      <Fragment>
        {/* Start Breadcrumb */}
        <Container>
          <Breadcrumb className={`${classes["custom-breadcrumb"]}`}>
            <Breadcrumb.Item
              className={`${classes["breadcrumb-item"]}`}
              href="/"
            >
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className={`${classes["breadcrumb-item"]} active`}
              active
            >
              Contact Us
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        {/* End Breadcrumb */}

        {/* Start Contact Us */}
        <div className="bg-white py-5">
          <Container>
            <h1 className={`${classes["contact-title"]}`}>Contact Us</h1>
            <Row>
              <Col className="mb-2" xl={4} lg={6} md={12} sm={12}>
                <Card className={`${classes["custom-card"]}`}>
                  <Card.Body>
                    <span className={`${classes["card-title"]}`}>
                      <i
                        className={`${classes["custom-icon"]} far fa-comment-alt`}
                      ></i>
                      Chat with Us
                    </span>
                    <p className={`${classes["card-body-text"]} mt-1`}>
                      Talk to our Shopcare, our 24/7 virtual customer care officer, or
                      <br />
                      get support from our Customer Care Specialists who
                      <br />
                      are available 24/7 (except on holidays)
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-2" xl={4} lg={6} md={12} sm={12}>
                <Card className={`${classes["custom-card"]}`}>
                  <Card.Body>
                    <span className={`${classes["card-title"]}`}>
                      <i
                        className={`${classes["custom-icon-phone"]} fas fa-phone`}
                      ></i>
                      Call E-shop
                    </span>
                    <p className={`${classes["card-body-text"]} mt-1`}>
                      (+977)9842505050
                      <br />
                      Available daily from 8AM-8PM (except Holidays)
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-2" xl={4} lg={6} md={12} sm={12}>
                <Card className={`${classes["custom-card"]}`}>
                  <Card.Body>
                    <span className={`${classes["card-title"]}`}>
                      <i
                        className={`${classes["custom-icon"]} fab fa-facebook`}
                      ></i>
                      E-Shop
                    </span>
                    <p className={`${classes["card-body-text"]} mt-1`}>
                      E-Shop online buyer community
                      <br />
                      Get advice and help from your fellow E-Shop customers!
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            {/* Start Contact Form */}
            <Row>
              <Col className="mb-4" xl={4}>
                <h1 className={`${classes["contact-title"]}`}>Stay In Touch</h1>
                <Form id="contactForm" onSubmit={this.contactFormHandler}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label className={`${classes["form-label"]}`}>
                      Please Enter Your Full Name
                    </Form.Label>
                    <Form.Control
                      className={`${classes["form-inputs"]}`}
                      type="text"
                      placeholder="Enter Name"
                      onChange={this.nameOnChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label className={`${classes["form-label"]}`}>
                      Please Enter Your Email
                    </Form.Label>
                    <Form.Control
                      className={`${classes["form-inputs"]}`}
                      type="email"
                      placeholder="Enter Email Address"
                      onChange={this.emailOnChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label className={`${classes["form-label"]}`}>
                      Please Enter Your Message
                    </Form.Label>
                    <Form.Control
                      className={`${classes["form-inputs"]}`}
                      as="textarea"
                      rows={3}
                      placeholder="Enter Message"
                      onChange={this.messageOnChange}
                    />
                  </Form.Group>
                  <Button
                    id="sendBtn"
                    type="submit"
                    className={`${classes["send-button"]}`}
                  >
                    Send
                  </Button>
                </Form>
              </Col>
              <Col className="mb-4">
               <iframe 
               title="Shop Location"
               width="100%"
                height="100%" 
                styles="border:0;"
                loading="lazy" 
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ419Kr-gZ6zkRtsZ49M0APZY&key=AIzaSyBhSTKB3ywkH-pQ-c6iIzMFheRleBAYxWg"
                >
                </iframe>
              </Col>
            </Row>

            {/* End Contact Form */}
          </Container>
        </div>
        {/* End Contact Us */}

        {/* Start React Toastify */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          closeButton={false}
        />
        {/* End React Toastify */}
      </Fragment>
    );
  }
}

export default Contact;
