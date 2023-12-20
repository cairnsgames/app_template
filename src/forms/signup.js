import React, { useState } from 'react';
import { Card, Row, Form, Button, Alert } from "react-bootstrap";
import LinkLogin from '../links/linklogin';

const SignUp = (props) => {
    
  const { onClose, onSignup } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");

  async function handleSubmit(ev) {
    ev.preventDefault();

    try {
      setError("");
      setLoading(true);
        if (onSignup) {
          onSignup(ev);
        } else if (onClose) {
          onClose();
        }
    } catch (err) {
      console.error("Login Error", err);
      setError("Failed to log in");
    }

    setLoading(false);
  }

    return (<Card>
        <Card.Header>
            <Card.Title className="text-center mb-4">Sign Up</Card.Title>
        </Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                required
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />
            </Form.Group>

            <Button disabled={loading} className="w-100 mt-2" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer>
            <Row>
                <LinkLogin onSignin={props.onSignin} />
            </Row>
        </Card.Footer>
    </Card>)
}

export default SignUp;