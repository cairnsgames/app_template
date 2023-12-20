import React from "react";
import { Link } from "@cairnsgames/ui-components";
import { Col } from "react-bootstrap";


const LinkForgot = (props) => {
    return <Col sm={12} md={4}>
            <Link
              href="#auth/forgot"
              onClick={(ev) => {
                props.onForgot(ev);
              }}
            >
              Forgot Password
            </Link>
            </Col>
}

export default LinkForgot;