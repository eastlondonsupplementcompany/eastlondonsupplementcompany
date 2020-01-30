import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Proteins() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  const [pills2, setPills2] = React.useState("2");
  return (
    <>
      <div className="section section-tabs">
        <Container>
        <h2 class="title">Proteins</h2>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Pea protein (80%)</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        {/* <i className="now-ui-icons shopping_shop"></i> */}
                        Nutrition
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        {/* <i className="now-ui-icons objects_umbrella-13"></i> */}
                        Overview
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        {/* <i className="now-ui-icons shopping_cart-simple"></i> */}
                        Extras
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
                        {/* <i className="now-ui-icons ui-2_settings-90"></i> */}
                        Research
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                    <p>
                        The nutrional profile of pea protein (100g):
                    </p>
                        <h6>Calories: 350kcal</h6>
                        <h6>Protein: 80g</h6>
                        <h6>Fat: 3g</h6>
                        <h6>of which saturates: 0.3g</h6>
                        <h6>Carbohydrates: 3.2g</h6>
                        <h6>of which sugar: 0g</h6>
                        <h6>Fibre: 0.5g</h6>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                    <p>
                        Pea protein contains all nine essential amino acids that 
                        your body cannot create and composed of around 80% protein.
                      </p>
                      <p>
                        Pea protein is defficient in melionine such that it is not considered a complete protein
                        and so should be consumed alongside a healthy diet. Melionine can 
                        be found in seeds, nuts, oats and other protein sources such as rice protein.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                    <p>
                      Pea protein is obtained through a gentle water-based isolation process without the use of chemical solvent. 
                      During a drying process, the outer shell of the pea is removed. After grinding and milling, 
                      a flour retaining soluble fibres, proteins, vitamins and minerals is obtained. 
                      Pea proteins are therefore easily separated from fibre and starch by wet filtration and centrifugation.
                    </p>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <p>
                        {/* Pea protein has been found to be deficient in methionine so should 
                        supplement with a healthy diet including seeds, nuts and oats to obtain
                        sufficient levels of methionine. */}
                        Coming soon...
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Brown rice protein (80%)</p>
              <Card>
                <CardHeader>
                <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                      {/* <i className="now-ui-icons shopping_shop"></i> */}
                      Nutrition
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                      {/* <i className="now-ui-icons objects_umbrella-13"></i> */}
                        Overview
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                      {/* <i className="now-ui-icons shopping_cart-simple"></i> */}
                        Extras
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                      {/* <i className="now-ui-icons ui-2_settings-90"></i> */}
                        Research
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                    <p>
                        The nutrional profile of brown rice protein (100g):
                      </p>
                        <h6>Calories: 442kcal</h6>
                        <h6>Protein: 80g</h6>
                        <h6>Fat: 1.5g</h6>
                        <h6>of which saturates: 1.1g</h6>
                        <h6>Carbohydrates: 0.8g</h6>
                        <h6>of which sugar: 0g</h6>
                        <h6>Fibre: 0.5g</h6>
                    </TabPane>
                    <TabPane tabId="pills2">
                      <p>
                        Rice protein contains all nine essential amino acids that 
                        your body cannot create and is composed of around 80% protein.
                      </p>
                      <p>
                        Rice protein is defficient in lysine such that it is not considered a complete protein
                        and so should be consumed alongside a healthy diet. Lysine can 
                        be found in soyabeans, tofu and other protein sources such as pea protein.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <p>
                      Rice protein powder (both white and brown) 
                      is made by grinding rice into a pulp and using an enzyme to separate 
                      the starch (carbohydrate) from the protein.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills4">
                      <p>
                        Coming soon...
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Hemp protein (50%)</p>
              <Card>
                <CardHeader>
                <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={pills2 === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills2("1");
                        }}
                      >
                      {/* <i className="now-ui-icons shopping_shop"></i> */}
                      Nutrition
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills2 === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills2("2");
                        }}
                      >
                      {/* <i className="now-ui-icons objects_umbrella-13"></i> */}
                        Overview
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills2 === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills2("3");
                        }}
                      >
                      {/* <i className="now-ui-icons shopping_cart-simple"></i> */}
                        Extras
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills2 === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills2("4");
                        }}
                      >
                      {/* <i className="now-ui-icons ui-2_settings-90"></i> */}
                        Research
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills2}
                  >
                    <TabPane tabId="pills1">
                      <p>
                        The nutrional profile of hemp protein (100g):
                      </p>
                        <h6>Calories: 346kcal</h6>
                        <h6>Protein: 50g</h6>
                        <h6>Fat: 9.7g</h6>
                        <h6>of which saturates: 1.2g</h6>
                        <h6>Carbohydrates: 4.7g</h6>
                        <h6>of which sugar: 2.9g</h6>
                        <h6>Fibre: 19.7g</h6>
                    </TabPane>
                    <TabPane tabId="pills2">
                      <p>
                        Hemp protein contains all nine essential amino acids that 
                        your body cannot create and is composed of around 50% protein.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <p>
                        Hemp protein is made by pressing hemp seeds to remove
                        oils. The seeds are then ground into a fine powder.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills4">
                      <p>
                        "I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus. I think that’s a
                        responsibility that I have, to push possibilities, to
                        show people, this is the level that things could be at."
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Proteins;
