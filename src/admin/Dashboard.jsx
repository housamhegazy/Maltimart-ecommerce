import React from 'react'
import '../styles/dashboard.css'
import {Container,Row,Col} from 'reactstrap'
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase/config";
export default function Dashboard() {
  const [value, loading, error] = useCollection(collection(db, "products"));
  const [value2,loading2, error2] = useCollection(collection(db, "users"));
if(value2){
  console.log(value2);
}
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <div className="revenue-box">
                <h5>Total Sale</h5>
                <span>$7899</span>
              </div>
            </Col>
            <Col lg='3'>
              <div className="order-box">
                <h5>Orders</h5>
                <span>766</span>
              </div>
            </Col>
            <Col lg='3'>
              <div className="products-box">
                <h5>total Products</h5>
                <span>{value && value.docs.length}</span>
              </div>
            </Col>
            <Col lg='3'>
            <div className="users-box">
                <h5>total users</h5>
                <span>{value2 && value2.docs.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
