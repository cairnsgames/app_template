import React, { useEffect } from "react";
import "./app.scss";
import { Container, Row, Col, Navbar, Spinner } from "react-bootstrap";
import { TenantProvider } from "@cairnsgames/tenant";
import { AuthenticationProvider } from "@cairnsgames/auth";
import DisplayTenant from "./components/tenantdisplay";
import DisplayAuth from "./components/displayauth";

const App = () => {
  useEffect(() => {
    console.log("App useEffect");
    fetch("http://cairnsgames.co.za/dev/php/tenant/demo.php", {
      headers: { "Content-Type": "application/json", "APP_ID": "950ef1d9-c657-11ed-95d1-f0a654c38aa6" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA", data);
      });
  }, []);
  return (
    <TenantProvider
      application="950ef1d9-c657-11ed-95d1-f0a654c38aa6"
      config={process.env}
    >
      <AuthenticationProvider googleClientId="284541609551-mnsvu7bi9medujkp0hdap87b1pvqjaa8.apps.googleusercontent.com">
        <Container fluid>
          <h1>Application Template</h1>
          <DisplayTenant />
          <DisplayAuth />
        </Container>
      </AuthenticationProvider>
    </TenantProvider>
  );
};

export default App;
