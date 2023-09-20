import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleOAuthComponent from "./googleAuthComponent";
import { useAuth } from "./microsoftAuthComponent";

interface SignInComponentProps {
  setRegisterClicked: (value: boolean) => void; // Assuming it's a function that takes a boolean as an argument
}

export function SignInComponent({ setRegisterClicked }: SignInComponentProps) {
  const navigate = useNavigate();
  const { signIn, isAuthenticated } = useAuth();

  const [logInDetails, setLogInDetails] = useState({
    email: "",
    password: "",
  });

  function onChangeHandler(
    type: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { value } = e.target;
    setLogInDetails({ ...logInDetails, [type]: value });
  }

  async function onSubmitLoginDetails() {
    try {
      const response = await fetch("http://localhost:1234/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logInDetails),
      });

      if (response.ok) {
        const responseData = await response.json(); // Parse the JSON response
        const jwtToken = responseData.data.token; // Access the token from the response data

        // Store the token securely (e.g., in localStorage)
        localStorage.setItem("token", jwtToken);
        console.log("User Logged In successfully: ", jwtToken);
        navigate("/");
      } else {
        // Handle API errors (e.g., show an error message)
        console.error("Error Logging in");
      }
    } catch (error) {
      // Handle network errors (e.g., no internet connection)
      console.error("Network error:", error);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center m-32 my-56">
        <div className=" w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="email"
                onChange={(e) => onChangeHandler("email", e)}
              />
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
                placeholder="******************"
                onChange={(e) => onChangeHandler("password", e)}
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={onSubmitLoginDetails}
                style={{ backgroundColor: "rgba(147,189,203,255)" }}
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-slate-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <div className="row">
            <button
              className="block w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => setRegisterClicked(true)}
              style={{ backgroundColor: "rgba(147,189,203,255)" }}
            >
              Register
            </button>
            <br />
            <GoogleOAuthComponent />
            <br />

            <button
              className="block w-full  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={signIn}
              style={{ backgroundColor: "rgba(147,189,203,255)" }}

            >
              Sign in with microsoft
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
