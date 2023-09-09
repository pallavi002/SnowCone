import React, { useState } from "react";
import { Register } from "../../components/register";
import { SignInComponent } from "../../components/signIn";

export function SignIn() {
  const [registerClicked, setRegisterClicked] = useState(false);

  console.log(registerClicked);

  return (
    <>
      {!registerClicked ? (
        <SignInComponent setRegisterClicked={setRegisterClicked} />
      ) : (
        <Register setRegisterClicked={setRegisterClicked} />
      )}
    </>
  );
}
