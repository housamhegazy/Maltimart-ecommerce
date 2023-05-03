import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection ,deleteDoc,doc} from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";
export default function Users() {
  const [value, loading, error] = useCollection(collection(db, "users"));
  if (value) {
    console.log(value.docs.map((item) => item.data().Email));
  }
  const DeleteItem = async(id)=>{
    await deleteDoc(doc(db, "users", id));
    toast.success("Deleted Successfully");
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="fw-b text-center">Users</h4>
          </Col>
          <Col lg="12" className="pt-5">
            {value ? (
              <table className="w-100">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>User name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {value.docs.map((item,index) => {
                    return (
                      <tr key={index}> 
                        <td><img src={item.data().photoURL} alt='userImage'/></td>
                        <td>{item.data().Email}</td>
                        <td>{item.data().displayName}</td>
                        <td><button className="btn btn-danger"onClick={()=>{
                            DeleteItem(item.data().uid)
                        }} >Delete</button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <h5>no data</h5>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
