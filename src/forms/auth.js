import React, { useEffect, useState } from "react";
import Login from "./login";
import SignUp from "./signup";
import Forgot from "./forgot";
import Magic from "./magic";

// interface AuthProps {
//   mode?: string;
//   onClose?: () => void;
// }

const Auth = (props) => {
  // const Auth = (props: AuthProps) => {
  const [mode, setMode] = useState(props.mode ?? "login");

  const onSignup = (ev) => {
    ev.preventDefault();
    setMode("register");
  };
  const onSignin = (ev) => {
    ev.preventDefault();
    setMode("login");
  };
  const onMagic = (ev) => {
    ev.preventDefault();
    setMode("magic");
  };
  const onForgot = (ev) => {
    ev.preventDefault();
    setMode("forgot");
  };

  useEffect(() => {
    if (mode) {
      window.location.hash = `#auth/${mode}`;
    }
  }, [mode]);

  return <Login
    onSignin={onSignin}
    onSignup={onSignup}
    onForgot={onForgot}
    onMagic={onMagic}
  />

    switch (mode) {
      case "register":
        return (
          <SignUp
            onSignin={onSignin}
            onSignup={onSignup}
            onForgot={onForgot}
            onMagic={onMagic}
          />
        );
      case "forgot":
        return (
          <Forgot
            onSignin={onSignin}
            onSignup={onSignup}
            onForgot={onForgot}
            onMagic={onMagic}
          />
        );
      case "magic":
        return (
          <Magic
            onSignin={onSignin}
            onSignup={onSignup}
            onForgot={onForgot}
            onMagic={onMagic}
          />
        );
      case "login":
        return (
          <Login
            onSignin={onSignin}
            onSignup={onSignup}
            onForgot={onForgot}
            onMagic={onMagic}
          />
        );
      default:
        return (
          <Login
            onSignin={onSignin}
            onSignup={onSignup}
            onForgot={onForgot}
            onMagic={onMagic}
          />
        );
    }
};

export default Auth;
