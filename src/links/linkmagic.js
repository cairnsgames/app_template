import React from "react";
import { Link } from "@cairnsgames/ui-components";
import { Col } from "react-bootstrap";

const LinkMagic = (props) => {
    return     <Col sm={12} md={4}>Login by <Link
              href="#auth/magic"
              onClick={(ev) => {
                props.onMagic(ev);
              }}
            >
              eMail
            </Link> link
    </Col>
}

export default LinkMagic;