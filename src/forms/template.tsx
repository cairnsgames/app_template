import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import useAuth from "../authprovider/useauth";
import Auth from "./auth";

const Template = () => {
  const [show, setshow] = useState(true);
  const { user, logout } = useAuth();

  useEffect(() => {
    if (user) {
      setshow(false);
    }
  }, [user]);

  return <div>
    <h1>Cairnsgames Auth </h1>
      <div>
        <Button onClick={()=>setshow(!show)}>Login</Button>
        {show && 
          <Auth onClose={()=>setshow(false)}/>
        }
      </div>
      <div>
        {user && 
        <div>
          <h2>Logged in as {user.email}</h2>
          <Button onClick={()=>logout()}>Logout</Button>
        </div>}
      </div>
  </div>
}

export default Template
