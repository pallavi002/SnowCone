import React, { useState } from "react";
import { SignInComponent } from "../signIn";
import { useNavigate } from "react-router-dom"; 

interface SignInComponentProps {
  setRegisterClicked: (value: boolean) => void;
}

export function Register({ setRegisterClicked }: SignInComponentProps) {
  /* add a role dropdown */
  const navigate = useNavigate();
  const [signInClicked, setSignInClicked] = useState(false);

  const [signInDetails, setSignInDetails] = useState({
    username: "",
    email: "",
    role: "user",
    password: ""
  });

  function onChangeHandler(type: string, e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSignInDetails({ ...signInDetails, [type]: value });
  }

  async function onSubmitRegister() {
    try {
        const response = await fetch("http://localhost:1234/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signInDetails),
        });
  
        if (response.ok) {
          // Handle the successful response here (e.g., show a success message)
          console.log("User details submitted successfully");
          navigate("/");
        } else {
          // Handle API errors (e.g., show an error message)
          console.error("Error submitting user details");
        }
      } catch (error) {
        // Handle network errors (e.g., no internet connection)
        console.error("Network error:", error);
      }
  }

  return (
    <>
      {!signInClicked ? (
        <div className="flex justify-center items-center m-32 my-56">
          <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => onChangeHandler("username", e)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  onChange={(e) => onChangeHandler("email", e)}
                />
                <p className="text-red-500 text-xs italic">
                  Please enter your email.
                </p>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="***********"
                  onChange={(e) => onChangeHandler("password", e)}
                />
                <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p>
              </div>

              <div className="flex items-center justify-between">
                <button
                  className=" hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={onSubmitRegister}
                  style={{ backgroundColor: "rgba(147,189,203,255)" }}
                >
                  Register
                </button>
              </div>
            </form>
            <div className="row">
              <button
                className="block w-full hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => {
                  setSignInClicked(true);
                  setRegisterClicked(false);
                }}
                style={{ backgroundColor: "rgba(147,189,203,255)" }}
              >
                Already Registered? Sign In
              </button>
            </div>
          </div>
        </div>
      ) : (
        <SignInComponent setRegisterClicked={setRegisterClicked} />
      )}
    </>
  );
}
