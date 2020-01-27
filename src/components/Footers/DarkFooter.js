/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        
        <a>East London Supplement Company</a>
        
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.instagram.com/eastlondonsupplementcompany/"
            target="_blank"
          >
            East London Supplement Company
          </a>
          . Coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Creative Tim
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
