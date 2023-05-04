import React, { useState } from "react";
import { toast } from "react-toastify";
import { Form, FormGroup, Container, Row, Col } from "reactstrap";
import { db, storage } from "../firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
export default function AddProduct() {
  const [enterTitle, setenterTitle] = useState("");
  const [shortDesc, setshortDesc] = useState("");
  const [description, setDescription] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [productImg, setproductImg] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate()
  const addproduct = async (e) => {
    e.preventDefault();
    setloading(true);
  
    //======== add product to the firebase database ==========
    try {
      //upload photo
      const docRef = await collection(db,`products`);
      const storageRef = ref(storage,`addedProductImg/${Date.now()}`)
      const uploadTask = uploadBytesResumable(storageRef, productImg);

      uploadTask.on(
        // @ts-ignore
        (error) => {
          toast.error("image not uploaded");
        },
        () => {
          //download url
          getDownloadURL(uploadTask.snapshot.ref).then(
            async (downloadURL) => {
              //store user data in firestore
              await addDoc(docRef, {
                productName: enterTitle,
                shortDesc: shortDesc,
                description: description,
                price: Number(price),
                category: category,
                imgUrl: downloadURL,
              });

            }
          );
        }
      );
      toast.success("product successfully added");
      navigate("/dashboard/all-products")
      setloading(false);
    } catch (error) {
      toast.error("product not added")
      setloading(false);
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {
              loading? <h4 className="text-center">Loading..........</h4>
              :
              <>
              <h4 className="mb-5">Add Product</h4>
            <Form onSubmit={addproduct}>
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
                  <input
                    type="number"
                    placeholder="$100"
                    value={price}
                    onChange={(e) => {
                      setprice(e.target.value);
                    }}
                    required
                  />
                </FormGroup>
                <FormGroup className="form-group w-50">
                  <span>Category</span>
                  <select
                    className="w-100"
                    value={category}
                    onChange={(e) => {
                      setcategory(e.target.value);
                    }}
                  >
                    <option value="choose" >choose</option>
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
                  <input
                    type="file"
                    required
                    onChange={(e) => {
                      setproductImg(e.target.files[0]);
                    }}
                  />
                </FormGroup>
              </div>
              <button type="submit" className="buy__btn">
                Add Product
              </button>
            </Form>
              </>
            }
          </Col>
        </Row>
      </Container>
    </section>
  );
}


// id: "17",
//     productName: "Timex Easy Reader Watch",
//     imgUrl: productImg20,
//     category: "watch",
//     price: 299,
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//     reviews: [
//       {
//         rating: 4.8,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         rating: 4.9,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.8,
//   },