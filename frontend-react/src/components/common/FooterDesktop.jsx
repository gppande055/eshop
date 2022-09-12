import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./FooterDesktop.module.css";
import axios from "axios";
import AppURL from "../../api/AppURL";
import ReactHtmlParser from "react-html-parser";

class FooterDesktop extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      facebook_link: "",
      instagram_link: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.SiteInfo)
      .then((response) => {
        let StatusCode = response.status;
        if (StatusCode === 200) {
          let JsonData = response.data[0];
          this.setState({
            address: JsonData["address"],
            facebook_link: JsonData["facebook_link"],
            instagram_link: JsonData["instagram_link"],
            copyright_text: JsonData["copyright_text"],
            loaderDiv: "d-none",
            mainDiv: "",
          });
        }
      })
      .catch((error) => {});
  }

  render() {
    return (
      <Fragment>
        {/* Start Footer One */}
        <div className={`${classes["footer-one"]}`}>
          <Container>
            <Row>
              <Col className="mt-4" xl={6} lg={6} md={12}>
                <h4 className={`${classes["footer-title"]}`}>
                  Payment Methods
                </h4>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-1.png")}
                      alt="delivery-services-1"
                      width="200px"
                    />
                  </Col>
              </Col>
              <Col xl={6} lg={6} md={12}>
                <Row>
                  <Col className="mt-4" xl={6} lg={6} md={6} sm={12}>
                    <h4 className={`${classes["footer-title"]}`}>
                      Delivery Services
                    </h4>
                    <div className="vstack gap-3">
                      <img
                        src={require("../../assets/images/common/footer/delivery/delivery-services-1.png")}
                        alt="delivery-services-1"
                        width="150px"
                      />
                    </div>
                  </Col>
                  <Col className="mt-4" xl={6} lg={6} md={6} sm={12}>
                    <h4 className={`${classes["footer-title"]}`}>
                      Verified by
                    </h4>
                    <img
                      className="me-3"
                      src={require("../../assets/images/common/footer/verified/verified-by-1.png")}
                      alt="delivery-services-1"
                      width="200px"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        {/* End Footer One */}

        {/* Start Footer Two */}
       
        {/* End Footer Two */}

        {/* Start Footer Three */}
        <div className={`${classes["footer-three"]}`}>
          <Container className={`${classes["responsive-footer"]}`}>
            <Row>
              <Col className="mt-5" xl={5} lg={5} md={12} sm={12}>
                {/* Start Skeletal Loading Div */}
                <div className={this.state.loaderDiv}>
                  <div className="ph-col-12 mb-2">
                    <div className="ph-row">
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                    </div>
                  </div>
                </div>
                {/* End Skeletal Loading Div */}

                <h4
                  className={`${classes["footer-three-title"]} ${this.state.mainDiv}`}
                >
                  {ReactHtmlParser(this.state.address)}
                </h4>
            
                {/* Google Translate Api */}
                <div className="mt-3" id="google_translate_element"></div>

                {/* End Map Grid */}
              </Col>
              <Col className="mt-5" xl={7} lg={7} md={12} sm={12}>
                <Row>
                  <Col className="mb-4" xl={6} lg={6} md={12} sm={12}>
                    <h4 className={`${classes["footer-three-title"]}`}>
                      Follow Us
                    </h4>
                    {/* Start Social Icon Grid */}
                    <a
                      href={this.state.facebook_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className={`${classes["social-icon"]} img-fluid me-1`}
                        src={require("../../assets/images/common/footer/social/facebook.png")}
                        alt="facebook.png"
                        width="30px"
                      />
                    </a>

                    <img
                      className={`${classes["social-icon"]} img-fluid me-1`}
                      src={require("../../assets/images/common/footer/social/google-plus.png")}
                      alt="google-plus.png"
                      width="30px"
                    />

                    <a
                      href={this.state.instagram_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className={`${classes["social-icon"]} img-fluid me-1`}
                        src={require("../../assets/images/common/footer/social/instagram.png")}
                        alt="instagram.png"
                        width="30px"
                      />
                    </a>

                    {/* End Social Icon Grid */}
                  </Col>
                  <Col xl={6} lg={6} md={12} sm={12}>
                    <div
                      className={`${classes["responsive-download-wrapper"]} hstack gap-1`}
                    >
                      <img
                        className={`${classes["responsive-lazada-icon"]} img-fluid me-1`}
                        src={require("../../assets/images/common/footer/lazada-icon.png")}
                        alt="lazada-icon.png"
                        width="60px"
                      />
                      <div>
                        <span className={`${classes["download-text-1"]}`}>
                          SHOP WHATEVER YOUR HEART BEATS SAYS
                          <br />
                        </span>
                        <span className={`${classes["download-text-2"]}`}>
                          {" "}
                          Market is in your hand
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Start Skeletal Loading Div */}
              <div className={this.state.loaderDiv}>
                <div className="ph-col-12">
                  <div className="ph-row">
                    <div className="ph-col-2"></div>
                    <div className="ph-col-10 empty"></div>
                  </div>
                </div>
              </div>
              {/* End Skeletal Loading Div */}
              <h4
                className={`${classes["footer-copyright"]} ${this.state.mainDiv}`}
              >
                {ReactHtmlParser(this.state.copyright_text)}
              </h4>
            </Row>
          </Container>
        </div>
        {/* End Footer Three */}
      </Fragment>
    );
  }
}

export default FooterDesktop;
