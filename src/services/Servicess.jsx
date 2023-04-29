import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import serviceData from "assets/data/serviceData";
import "./services.css";
export default function ServicesComp() {
  return (
    <section className="services">
      <Container>
        <Row>
          {serviceData.map((item,index) => {
            return (
              <Col key={index} lg="3" md="4">
                <motion.div whileHover={{scale:.9}} className="service__item d-flex align-items-center" style={{background:item.bg}}>
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle }</p>
                  </div>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
