import React, { useState, useEffect } from "react";
import CommonSection from "Components/Ul/CommonSection";
import Helmet from "Components/helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import products from "assets/data/products";
import "../styles/shop.css";
import ProductList from "Components/Ul/ProductList";
export default function Shope() {
  const [productsData, setProductsData] = useState(products);

  const handleFilterData = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredproducts = products.filter(
        (item) => item.category === filterValue
      );
      setProductsData(filteredproducts);
    }
    if (filterValue === "mobile") {
      const filteredproducts = products.filter(
        (item) => item.category === filterValue
      );
      setProductsData(filteredproducts);
    }
    if (filterValue === "chair") {
      const filteredproducts = products.filter(
        (item) => item.category === filterValue
      );
      setProductsData(filteredproducts);
    }
    if (filterValue === "watch") {
      const filteredproducts = products.filter(
        (item) => item.category === filterValue
      );
      setProductsData(filteredproducts);
    }
    if (filterValue === "wireless") {
      const filteredproducts = products.filter(
        (item) => item.category === filterValue
      );
      setProductsData(filteredproducts);
    }
  };
  const handlesearch = (e) => {
    const searchValue = e.target.value;
    const searchedProducts = products.filter(
      (item) =>
        item.productName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProductsData(searchedProducts);
  };
  return (
    <Helmet title={"shop"}>
      <CommonSection title={"products"} />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter-widget">
                <select onChange={handleFilterData}>
                  <option>Filter by Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter-widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search-box">
                <input
                  onChange={handlesearch}
                  type="text"
                  placeholder="search ....."
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">no products found</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
