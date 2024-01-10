import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Login from "../../assets/images/login.png";
import { Link, useNavigate } from "react-router-dom";
import AppURL from "../../api/AppURL";
const UserLogin = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState("");
  //router v6 cho redirect
  const navigate = useNavigate();

  // Login Form Submit Method
  const formSubmit = (e) => {
    e.preventDefault();
    // const data = {
    //   email: email,
    //   password: password,
    // };
    let myFormData = new FormData();
    myFormData.append("email", email);
    myFormData.append("password", password);
    fetch(AppURL.UserLogin, { method: "post", body: myFormData })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
        setLoggedIn(true);
        localStorage.setItem("token", data.token);
        //luu tru user
        setUser(data.user);
      })
      .catch((error) => {});
  };

  //neu da dang nhap thi chuyen huong sang trang Profile
  if (loggedIn) {
    return navigate("/profile");
  }
  return (
    <Fragment>
      <Container>
        <Row className="p-2">
          <Col
            className="shadow-sm bg-white mt-2"
            md={12}
            lg={12}
            sm={12}
            xs={12}
          >
            <Row className="text-center">
              <Col
                className="d-flex justify-content-center"
                md={6}
                lg={6}
                sm={12}
                xs={12}
              >
                <Form className="onboardForm" onSubmit={formSubmit}>
                  <h4 className="section-title-login"> Đăng nhập </h4>
                  <input
                    className="form-control m-2"
                    type="email"
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="form-control m-2"
                    type="password"
                    placeholder="Enter Your Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    className="btn btn-block m-2 site-btn-login"
                    type="submit"
                  >
                    {" "}
                    Login{" "}
                  </Button>
                  <br></br> <br></br>
                  <hr />
                  <p>
                    {" "}
                    <b> Forget My Password? </b>
                    <Link>
                      <b> Forget Password </b>{" "}
                    </Link>{" "}
                  </p>
                  <p>
                    {" "}
                    <b> Don't Have An Account ? </b>
                    <Link to="/register">
                      <b> Register </b>{" "}
                    </Link>{" "}
                  </p>
                </Form>
              </Col>

              <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                <img className="onboardBanner" src={Login} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default UserLogin;
