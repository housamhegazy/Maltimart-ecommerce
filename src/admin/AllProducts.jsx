
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { Col, Container, Row } from "reactstrap";
import Error404 from "Pages/Error404";
import { doc, deleteDoc } from "firebase/firestore";
import Loader from "Components/Loader/Loader";
import { toast } from "react-toastify";
export default function AllProducts() {
  const [value, loading, error] = useCollection(collection(db,"products"));

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("Deleted Successfully");
  };
  if (loading) {
    return(
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Loader />;
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
  if (error) {
    return <Error404 />;
  }
  if (value) {
    return (
      <section>
        <Container>
          <Row>
            <Col>
              {value.docs.length === 0 ? (
                <h1 className="text-center"> no data added </h1>
              ) : (
                <table className="w-100">
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
                          <td>{item.data().productName}</td>
                          <td>{item.data().category}</td>
                          <td>{item.data().price}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                deleteItem(item.id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
