import React, { useEffect,useState } from "react";
import "../styles/login.css";
import Helmet from "Components/helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase/config";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
export default function Signup() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(()=>{
    if(user && loading){
      navigate("/")
    } 
  },[user,loading])
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [File, setFile] = useState(null);
  const [loadingg, setLoading] = useState(false);


  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        Email,
        Password
      );
      const user = userCredential.user;

      //upload photo
      const profileRef = ref(storage, `images/${Date.now() + Username}`);
      const uploadProfilePhoto = uploadBytesResumable(profileRef, File);
      // @ts-ignore
      uploadProfilePhoto.on((error)=> {
          toast.error(error.message);
        },
        () => {
          //download url
          getDownloadURL(uploadProfilePhoto.snapshot.ref).then(
            async (downloadURL) => {
              //update username and user profile
              await updateProfile(auth.currentUser, {
                displayName: Username,
                photoURL: downloadURL,
              });
              // finish user name
              //store user data in firestore
              await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                displayName: Username,
                Email,
                photoURL: downloadURL,
              });
            }
          );
        }
      );
      setLoading(false);
      toast.success("account created");
      navigate("/login")
    } catch (error) {
      setLoading(false);
      // const errorCode = error.code;
      // const errorMessage = error.message;
      toast.error("something went wrong");
      // ..
    }
  };
  if(!user){
    return (
      <Helmet title={"SignUp"}>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h6 className="fw-bold">loading....</h6>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center my-5">
                <h3 className="fw-bold fs-4">create an account</h3>
                <Form className="auth-form" onSubmit={signup}>
                  <FormGroup className="form-group">
                    <input
                      type="text"
                      placeholder="Username"
                      value={Username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      value={Email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <input
                      type="password"
                      placeholder="Enter Your password"
                      value={Password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <input
                      type="file"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                    />
                  </FormGroup>
                  <button className="buy__btn login-btn">Signup</button>
                  <p>
                    already have an account ? <Link to="/login">Login</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </Helmet>
    );
  }
  
}
