import React, { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { Col, Container, Row } from "reactstrap";
import Error404 from "Pages/Error404";
import ClipLoader from "react-spinners/ClipLoader";
export default function AllProducts() {
  const [value, loading, error] = useCollection(collection(db, "products"));

  if(!value && !loading){
    return(<h4>No data</h4>)
  }
 
  if(loading){
    return(<ClipLoader
      color={'red'}


      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />)
  }
  if(error){
    return(<Error404/>)
  }
  if (value) {
    return (
      <section>
        <Container>
          <Row>
            <Col>
              <table>
                <thead>
                  <tr>
                    <th>image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {value.docs.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img src={item.data().imgUrl} alt="" />
                        </td>
                        <td>{item.data().title}</td>
                        <td>{item.data().category}</td>
                        <td>{item.data().price}</td>
                        <td>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
