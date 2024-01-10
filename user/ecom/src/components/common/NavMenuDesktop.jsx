import React, { Component, useEffect } from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { defaultoptions } from "../../utils/auth";

function NavMenuDesktop() {
  // useEffect(() => {
  //   window.scroll(0, 0);
  //   console.log(defaultoptions);
  //   //defauloptions co' gan token ben trong Authenrization: Bearer token...
  //   fetch(AppURL.UserData, defaultoptions)
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <>
      <div className="TopSectionDown">
        <Navbar fixed={"top"} className="navbar" bg="light">
          <Container
            fluid={"true"}
            className="fixed-top shadow-sm p-2 mb-0 bg-white"
          >
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Link to="/">
                  {" "}
                  <img className="nav-logo" src={Logo} />{" "}
                </Link>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <div className="input-group w-100">
                  <input type="text" className="form-control" />
                  <Button type="button" className="btn site-btn">
                    <i className="fa fa-search"> </i>
                  </Button>
                </div>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <Link to="/favourite" className="btn">
                  <i className="fa h4 fa-heart"></i>
                  <sup>
                    <span className="badge text-white bg-danger">3</span>
                  </sup>
                </Link>
                <Link to="/notification" className="btn">
                  <i className="fa h4 fa-bell"></i>
                  <sup>
                    <span className="badge text-white bg-danger">5</span>
                  </sup>
                </Link>

                <Link to="/login" className="h4 btn">
                  Đăng nhập
                </Link>
                <Link to="/register" className="h4 btn">
                  Đăng ký
                </Link>
                <Link to="/cart" className="cart-btn">
                  <i className="fa fa-shopping-cart"></i> 3 Items{" "}
                </Link>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavMenuDesktop;
