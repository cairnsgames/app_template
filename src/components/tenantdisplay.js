import React from "react";
import { useTenant } from "@cairnsgames/tenant";

const DisplayTenant = () => {
  console.log("process.env", process.env)
  const {tenant} = useTenant();
  return (
    <div>
      <h3>Tenant: {tenant}</h3>
    </div>
  );
};

export default DisplayTenant;
