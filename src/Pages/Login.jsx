import React, { useEffect, useState } from "react";
import "../styles/login.css";
import Helmet from "Components/helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";
import { useAuthState } from 'react-firebase-hooks/auth';


export default function Login() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  useEffect(()=>{
    if(user && !loading){
      navigate("/")
    } 
  },[user,loading,navigate])
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loadingg, setLoading] = useState(false);

  const signin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        Email,
        Password
      );
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      toast.success("successfully logged in");
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
      // const errorCode = error.code;
      // const errorMessage = error.message;
    }
  };
  if(!user){
    return (
      <Helmet title={"Log in"}>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5>loading .... </h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center my-5">
                <h3 className="fw-bold fs-4 my-5">Login</h3>
                <Form className="auth-form" onSubmit={signin}>
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
                  <button className="buy__btn login-btn">{loadingg?"loading":"login"}</button>
                  <p>
                    dont have an account ?{" "}
                    <Link to="/signup">Create an account</Link>
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
