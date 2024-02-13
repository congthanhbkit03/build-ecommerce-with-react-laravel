import React, { Component, useEffect } from "react";
import { Fragment } from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { readUserByToken } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //redux state
  const { loading, error, userData } = useSelector((state) => state.user);
  // useEffect(() => {
  //   console.log("lllll");
  // });
  console.log(userData);
  useEffect(() => {
    console.log("helll");
    if (!localStorage.getItem("token")) {
      return navigate("/login");
    }
    dispatch(readUserByToken());
  }, []);

  // if (!userData) {
  //   return navigate("/login");
  // }
  console.log("oooo");

  // (!userData && <p>Loading...</p>);
  return (
    <>
      <h1> User Profile Page </h1>
      {userData && (
        <ul className="list-group">
          <li className="list-group-item">Name : {userData.user.name} </li>
          <li className="list-group-item">Email : {userData.user.email} </li>
        </ul>
      )}
      {!userData && <p>Loading...</p>}
    </>
  );
};

export default Profile;
