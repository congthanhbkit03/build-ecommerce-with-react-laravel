import React, { Component } from "react";
import { Fragment } from "react";

const Profile = ({ user }) => {
  let name = "N/A";
  let email = "N/A";
  if (user) {
    name = user.name;
    email = user.email;
  }
  return (
    <Fragment>
      <h1> User Profile Page </h1>

      <ul className="list-group">
        <li className="list-group-item">Name : {name} </li>
        <li className="list-group-item">Email : {email} </li>
      </ul>
    </Fragment>
  );
};

export default Profile;
