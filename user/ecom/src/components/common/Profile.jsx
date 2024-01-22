import React, { Component } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  //redux state
  const { loading, error, userData } = useSelector((state) => state.user);
  console.log(userData);
  if (!userData) {
    return navigate("/login");
  }
  return (
    <Fragment>
      <h1> User Profile Page </h1>

      <ul className="list-group">
        <li className="list-group-item">Name : {userData.user.name} </li>
        <li className="list-group-item">Email : {userData.user.email} </li>
      </ul>
    </Fragment>
  );
};

export default Profile;
