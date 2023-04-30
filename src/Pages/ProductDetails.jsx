import Productcard from "Components/Ul/Productcard";
import Helmet from "Components/helmet/Helmet";
import products from "assets/data/products";
import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
export default function ProductDetails() {
  const param = useParams();
  // console.log(param.productId);
  const id = param.productId;
const product = products.find((item)=>item.id === id)
  return (
    <Helmet title={"product details"}>
      <section>
        <Container>
          <Row>
            <Col lg="4">
              <Productcard item={product}/>
              </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
