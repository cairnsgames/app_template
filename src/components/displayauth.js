import React from 'react';
import { useAuth } from "@cairnsgames/auth";
import Auth from "../forms/auth";
import { Button } from "react-bootstrap";

const DisplayAuth = () => {
    const { user, logout } = useAuth();
    console.log("Auth user", user)
    return (
        <div>
        <h3>Auth: {user?.name}</h3>
        {!user && <Auth />}
        {user && <Button onClick={logout}>Logout</Button>}
        </div>
    );
}

export default DisplayAuth;