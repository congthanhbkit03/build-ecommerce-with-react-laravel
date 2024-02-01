import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppURL";
function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  //componentDidMount
  useEffect(() => {
    console.log("xxxxx");
    fetch(AppURL.ProductListByRemark("FEATURED"))
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // const FeaturedList = this.state.ProductData;
  const MyView = products.map((FeaturedList, i) => {
    if (FeaturedList.special_price == "na") {
      return (
        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
          <Link className="text-link" to={"/productdetails/" + FeaturedList.id}>
            <Card className="image-box card">
              <img className="center" src={FeaturedList.image} />
              <Card.Body>
                <p className="product-name-on-card">{FeaturedList.title}</p>
                <p className="product-price-on-card">
                  Price : ${FeaturedList.price}
                </p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    } else {
      return (
        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
          <Link className="text-link" to={"/productdetails/" + FeaturedList.id}>
            <Card className="image-box card">
              <img className="center" src={FeaturedList.image} />
              <Card.Body>
                <p className="product-name-on-card">{FeaturedList.title}</p>
                <p className="product-price-on-card">
                  Price :{" "}
                  <strike className="text-secondary">
                    ${FeaturedList.price}
                  </strike>{" "}
                  ${FeaturedList.special_price}
                </p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    }
  });

  return (
    <>
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>FEATURED PRODUCT</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <Row>{MyView}</Row>
      </Container>
    </>
  );
}

export default FeaturedProducts;
