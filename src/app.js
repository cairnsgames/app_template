import React from "react";
import "./app.scss";
import { Container, Row, Col, Navbar, Spinner } from "react-bootstrap";
import { TenantProvider } from "@cairnsgames/tenant";
import DisplayTenant from "./components/tenantdisplay";

const App = () => {
  console.log("process.env", process.env)
  return (
    <TenantProvider application="Template12345">
      <Container fluid>
        <h1>Application Template</h1>
        <DisplayTenant />
        Name: {process.env.name}
      </Container>
    </TenantProvider>
  );
};

export default App;
