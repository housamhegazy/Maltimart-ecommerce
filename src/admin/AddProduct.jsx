import React, { useState } from "react";
import { Form, FormGroup, Container, Row, Col } from "reactstrap";
export default function AddProduct() {
  const [enterTitle, setenterTitle] = useState("");
  const [shortDesc, setshortDesc] = useState("");
  const [description, setDescription] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [productImg, setproductImg] = useState(null);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="mb-5">Add Product</h4>
            <Form>
              <FormGroup className="form-group">
                <span>product title</span>
                <input
                  type="text"
                  placeholder="Double Sofa"
                  value={enterTitle}
                  onChange={(e) => {
                    setenterTitle(e.target.value);
                  }}
                  required
                />
              </FormGroup>
              <FormGroup className="form-group">
                <span>Short Description</span>
                <input
                  type="text"
                  placeholder="Lorem ......"
                  value={shortDesc}
                  onChange={(e) => {
                    setshortDesc(e.target.value);
                  }}
                  required
                />
              </FormGroup>
              <FormGroup className="form-group">
                <span> Description</span>
                <input
                  type="text"
                  placeholder="Description...."
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  required
                />
              </FormGroup>
              <div className="d-flex align-items-center justify-content-between gap-5">
                <FormGroup className="form-group w-50">
                  <span> Price</span>
                  <input type="number" placeholder="$100" value={price}
                  onChange={(e) => {
                    setprice(e.target.value);
                  }} 
                  required
                  />
                </FormGroup>
                <FormGroup className="form-group w-50">
                  <span>Category</span>
                  <select className="w-100" value={category} onChange={(e) => {
                    setcategory(e.target.value);
                  }}>
                    <option value="chair">Chair</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </FormGroup>
              </div>

              <div>
                <FormGroup className="form-group">
                  <span> Product Image</span>
                  <input type="file" required />
                </FormGroup>
              </div>
              <button type="submit" className="buy__btn">
                Add Product
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
