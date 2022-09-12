import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import classes from "./Profile.module.css";

class Profile extends Component {
  render() {
    let first_name;
    let last_name;
    let profile_photo;
    if (this.props.user) {
      first_name = this.props.user.first_name;
      last_name = this.props.user.last_name;
      profile_photo = this.props.user.profile_photo_path;
    }

    // Authorization
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }

    return (
      <Fragment>
        <div className={`${classes["auth-wrapper"]}`}>
          <Container>
            <Row>
              <Col className="mx-auto py-5" xl={2} lg={2} md={2} sm={12}>
                <span className={`${classes["user-name"]}`}>
                 <h2>Hello, {first_name} {last_name}</h2> 
                </span>
                <br />
                <Button className={`${classes["verified-button"]}`}>
                  <i className="fas fa-check-circle"></i> Verified Account
                </Button>
                <br />
                <img
                  src={`http://127.0.0.1:8000/upload/admin_images/${profile_photo}`}
                  alt="profile"
                  className="img-fluid mt-3 img-thumbnail"
                  width="100px"
                  height="100"
                />
                <br />
                <Link to="orderlist">
                  <small className={`${classes["mypurchase-button"]}`}>
                    My Purchase
                  </small>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Profile;
