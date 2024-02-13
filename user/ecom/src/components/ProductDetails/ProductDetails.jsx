import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SuggestedProduct from "./SuggestedProduct";
import ReviewList from "./ReviewList";

import ReactDOM from "react-dom";
const ProductDetails = ({ data }) => {
  console.log(data);
  //data nay la object gom {detail: {}, product: {}}
  function imgOnClick(event) {
    let imgSrc = event.target.getAttribute("src");
    let previewImg = document.getElementById("previewImg");
    ReactDOM.findDOMNode(previewImg).setAttribute("src", imgSrc);
  }
  let ProductAllData = data;
  let title;
  let brand;
  let category;
  let subcategory;
  let image;
  let price;
  let product_code;
  let remark;
  let special_price;
  let star;
  let image_one;
  let image_two;
  let image_three;
  let image_four;
  let product_id;
  let short_description;
  let long_description;
  let color;
  let size;
  if (ProductAllData) {
    title = ProductAllData["product"][0]["title"];
    brand = ProductAllData["product"][0]["brand"];
    category = ProductAllData["product"][0]["category"];
    subcategory = ProductAllData["product"][0]["subcategory"];
    image = ProductAllData["product"][0]["image"];
    price = ProductAllData["product"][0]["price"];
    product_code = ProductAllData["product"][0]["product_code"];
    remark = ProductAllData["product"][0]["remark"];
    special_price = ProductAllData["product"][0]["special_price"];
    star = ProductAllData["product"][0]["star"];

    image_one = ProductAllData["detail"][0]["image_1"];
    image_two = ProductAllData["detail"][0]["image_2"];
    image_three = ProductAllData["detail"][0]["image_3"];
    image_four = ProductAllData["detail"][0]["image_4"];
    color = ProductAllData["detail"][0]["color"];
    size = ProductAllData["detail"][0]["size"];
    product_id = ProductAllData["detail"][0]["product_id"];
    short_description = ProductAllData["detail"][0]["short_description"];
    long_description = ProductAllData["detail"][0]["long_description"];

    var ColorDiv = "d-none"; //class cho vung hien thi mau sac - neu ko co thi an di
    if (color != "na") {
      let ColorArray = color.split(",");
      var ColorOption = ColorArray.map((ColorList, i) => {
        return <option value={ColorList}> {ColorList} </option>;
      });
      ColorDiv = "";
    } else {
      ColorDiv = "d-none";
    }

    var SizeDiv = "d-none";
    if (size != "na") {
      let SizeArray = size.split(",");
      var SizeOption = SizeArray.map((SizeList, i) => {
        return <option value={SizeList}> {SizeList} </option>;
      });
      SizeDiv = "";
    } else {
      SizeDiv = "d-none";
    }
  }

  const PriceOption = (price, special_price) => {
    if (special_price == "na") {
      return <p className="product-price-on-card"> Price : {price}$ </p>;
    } else {
      return (
        <p className="product-price-on-card">
          Price : <strike className="text-secondary">{price}$ </strike>{" "}
          {special_price}$
        </p>
      );
    }
  };
  return (
    <Fragment>
      <Container fluid={true} className="BetweenTwoSection">
        <Row className="p-2">
          <Col
            className="shadow-sm bg-white pb-3 mt-4"
            md={12}
            lg={12}
            sm={12}
            xs={12}
          >
            <Row>
              <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                <img id="previewImg" className="bigimage" src={image_one} />{" "}
                <Container className="my-3">
                  <Row>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                      <img
                        onClick={imgOnClick}
                        className="w-100 smallimage product-sm-img"
                        src={image_one}
                      />
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                      <img
                        onClick={imgOnClick}
                        className="w-100 smallimage product-sm-img"
                        src={image_two}
                      />
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                      <img
                        onClick={imgOnClick}
                        className="w-100 smallimage product-sm-img"
                        src={image_three}
                      />
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                      <img
                        onClick={imgOnClick}
                        className="w-100 smallimage product-sm-img"
                        src={image_four}
                      />
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                <h5 className="Product-Name">{title}</h5>
                <h6 className="section-sub-title">{short_description}</h6>
                {/* <div className="input-group">
                  <div className="Product-price-card d-inline ">
                    Reguler Price ${price}
                  </div>
                  <div className="Product-price-card d-inline ">
                    50% Discount
                  </div>
                  <div className="Product-price-card d-inline ">
                    New Price ${special_price}
                  </div>
                </div> */}
                {PriceOption(price, special_price)}
                <h6 className="mt-2">
                  Category : <b>{category}</b>{" "}
                </h6>
                <h6 className="mt-2">
                  SubCategory : <b>{subcategory}</b>
                </h6>
                <h6 className="mt-2">
                  Brand : <b>{brand}</b>
                </h6>
                <h6 className="mt-2">
                  Product Code : <b>{product_code}</b>
                </h6>

                <div className={ColorDiv}>
                  <h6 className="mt-2"> Choose Color </h6>
                  <select className="form-control form-select">
                    <option>Choose Color</option>
                    {ColorOption}
                  </select>
                </div>

                <div className={SizeDiv}>
                  <h6 className="mt-2"> Choose Size </h6>
                  <select className="form-control form-select">
                    <option>Choose Size</option>
                    {SizeOption}
                  </select>
                </div>

                <div className="">
                  <h6 className="mt-2"> Choose Quantity </h6>
                  <select className="form-control form-select">
                    <option>Choose Quantity</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="input-group mt-3">
                  <button className="btn site-btn m-1 ">
                    {" "}
                    <i className="fa fa-shopping-cart"></i> Add To Cart
                  </button>
                  <button className="btn btn-primary m-1">
                    {" "}
                    <i className="fa fa-car"></i> Order Now
                  </button>
                  <button className="btn btn-primary m-1">
                    {" "}
                    <i className="fa fa-heart"></i> Favourite
                  </button>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="" md={6} lg={6} sm={12} xs={12}>
                <h6 className="mt-2">DETAILS</h6>
                <p>{long_description}</p>
              </Col>

              <Col className="" md={6} lg={6} sm={12} xs={12}>
                {data && data.reviews && <ReviewList reviews={data.reviews} />}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {data && data.product && data.product[0].subcategory && (
        <SuggestedProduct subcategory={data.product[0].subcategory} />
      )}
    </Fragment>
  );
};

export default ProductDetails;
