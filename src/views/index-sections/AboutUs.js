import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

class AboutUs extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
        <>
          <div className="section section-images">
            <Container>
              <Row>
                <Col md="12">
                  <div className="hero-images-container">
                    <img
                      alt="..."
                      src={require("assets/img/" + this.props.imageOne)}
                    ></img>
                  </div>
                  </Col>
                <Col md="12">
                  <h2>About Us</h2>
                  <p>
                        We are East London Supplement Company. We provide organic, vegan, GMO-free protein supplements to our customers at affordable prices.
                        Our goal is to improve the lives of our customers through nutrion and reduce the impact of mainstream supplement suppliers on the environment.
                        We are currently at conception stage for our first plant based protein supplement. We have agreed a supplier and now begin the process of optimising
                        a blend of protein rich plant based ingredients to create a nutrtional, environmentally friendly protein supplement suitable for building, maintaining 
                        and supporting the body.
                      </p>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      );
    }
}

export default AboutUs;
