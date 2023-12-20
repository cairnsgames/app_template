import React, { useState } from 'react';
import { Card, Row, Form, Button, Alert} from "react-bootstrap";
import LinkLogin from '../links/linklogin';

const Magic = (props) => {
  const { onClose } = props;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      // if (login(email, password)) {
        if (onClose) onClose();
      // }
    } catch (err) {
      console.log("Login Error", err);
      setError("Failed to log in");
    }

    setLoading(false);
  }

    return (<Card>
        <Card.Header>
            <Card.Title className="text-center mb-4">Magic Link</Card.Title>
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
              <Form.Text>Enter your email address below. If we have an account for you, we will send you a magic link to log in.</Form.Text>
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-2" type="submit">
              Send
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

export default Magic;