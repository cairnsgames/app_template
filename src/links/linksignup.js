import React from "react";
import { Link } from "@cairnsgames/ui-components";
import { Col } from "react-bootstrap";

const LinkSignup = (props) => {
    return <Col sm={12} md={4}>Need an account?{" "}
            <Link
              href="#auth/signup"
              onClick={(ev) => {
                props.onSignup(ev);
              }}
            >
              Sign up
            </Link>
            </Col>
}

export default LinkSignup;