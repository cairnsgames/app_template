import React, { useState } from "react";
import { Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { GoogleLogin } from "@react-oauth/google";
// import { useJwt } from "react-jwt";
import { useAuth } from "@cairnsgames/auth";
import LinkSignup from "../links/linksignup";
import LinkForgot from "../links/linkforgot.js";
import LinkMagic from "../links/linkmagic";

const Login = (props) => {
  const { onClose } = props;

  const [email, setEmail] = useState("first.last@email.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, setgoogleAccessToken } = useAuth();

  // const [profile, setProfile] = useState();
  // const [token, setToken] = useState<string>("");
  // const { decodedToken, isExpired } = useJwt(token);
  // console.log("LOGIN TOKEN", decodedToken);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      if (login(email, password)) {
        if (onClose) onClose();
      }
    } catch (err) {
      console.error("Login Error", err);
      setError("Failed to log in");
    }

    setLoading(false);
  }

  const responseMessage = (response) => {
    setgoogleAccessToken(response.credential);
    if (onClose) onClose();
  };

  const errorMessage = () => {
    const error = new Error("Google login failure");
    console.error(error);
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title className="text-center mb-4">Log In</Card.Title>
      </Card.Header>
      <Card.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Row>
            <Col sm={12} md={6} className="mt-2">
              <Button disabled={loading} className="w-100" type="submit">
                Log In
              </Button>
            </Col>
            <Col sm={12} md={6} className="mt-2">
              <GoogleLogin
                className="w-100"
                onSuccess={responseMessage}
                onError={errorMessage}
                width={"100%"}
              />
            </Col>
          </Row>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Row>
          <LinkSignup onSignup={props.onForgot} />
          <LinkForgot onForgot={props.onForgot} />
          <LinkMagic onMagic={props.onMagic} />
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Login;
