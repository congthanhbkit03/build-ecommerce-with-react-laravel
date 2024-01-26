import React, { Fragment, useEffect } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import SuggestedProduct from "../components/ProductDetails/SuggestedProduct";
import { useParams } from "react-router-dom";
import AppURL from "../api/AppURL";

const ProductDetailsPage = () => {
  const { id } = useParams(); //lay id tu route

  //tuong duong ComponentDidMount
  useEffect(() => {
    window.scroll(0, 0);

    //lay id
    //goi api
    fetch(AppURL.ProductDetails(id))
      .then((data) => data.json())
      .then((data) => console.log(data));
    //truyen vao component
  }, []);

  return (
    <Fragment>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>

      <ProductDetails />
      <SuggestedProduct />
      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
};

export default ProductDetailsPage;
