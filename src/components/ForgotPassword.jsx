import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { AuthProvider } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { login } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
    //   await login(emailRef.current.value, passwordRef.current.value);
      navigate('/dashboard')
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <>
      <AuthProvider>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Password Reset</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handlesubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      ref={emailRef}
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Button
                    type="submit"
                    className="w-100 mt-4"
                    disabled={loading}
                  >
                    Reset Password
                  </Button>
                </Form>
                <div className="w-100 text-center mt-2">
                  <Link to='/login'>Login</Link>
                </div>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Need an account? <Link to='/signup'>Signup</Link>
            </div>
          </div>
        </Container>
      </AuthProvider>
    </>
  );
};

export default ForgotPassword
