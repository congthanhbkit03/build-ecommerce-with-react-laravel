import React, { Component, Fragment, useEffect, useState } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Profile from "../components/common/Profile";
import { defaultoptions } from "../utils/auth";
import AppURL from "../api/AppURL";

const ProfilePage = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    window.scroll(0, 0);
    console.log(defaultoptions);
    //defauloptions co' gan token ben trong Authenrization: Bearer token...
    fetch(AppURL.UserData, defaultoptions)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Fragment>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>

      <Profile user={user} />

      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
};

export default ProfilePage;
