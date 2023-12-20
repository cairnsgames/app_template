import React from "react";
import { Link } from "@cairnsgames/ui-components";
import { Col } from "react-bootstrap";


const LinkLogin = (props) => {
    return <Col sm={12} md={4}>Back to{" "}
            <Link
              href="#auth/signin"
              onClick={(ev) => {
                props.onSignin(ev);
              }}
            >
              Login
            </Link>
            </Col>
}

export default LinkLogin;