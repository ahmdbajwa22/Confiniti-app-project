import React, { useState } from "react";
// import googleIcon from "../../../../Assets/googleIcon.png";
// import facebookIcon from "../../../../Assets/facebookIcon.jpeg";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function SmSignInSubComp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //logIn
  const logIn = async (e) => {
    e.preventDefault();

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const token = response.user.accessToken;

      Cookies.set("user-p2p-token", token);

      //Token decoder
      const [header, payload, signature] = token.split(".");
      const decodedPayload = JSON.parse(atob(payload));
      const userId = decodedPayload.user_id;
      const userEmail = decodedPayload.email;

      //local storage
      Cookies.set("userId", userId);
      Cookies.set("userEmail", userEmail);
      Cookies.set("bgSecondary", "transparent");
      Cookies.set("headingColor", "");

      // clearing fields
      setEmail("");
      setPassword("");
      navigate("/");
      window.location.reload();
      return;
    } catch (error) {
      setEmail("");
      setPassword("");
      navigate("/SignIn");
      console.log(
        `There was an Error submitting the SignUp Form! ERROR 404: ${error}`
      );
      const msg = error.message.replace(").", "");
      if (error.code === "auth/user-not-found") {
        return toast.error(
          "User doesn't exist, please try a different email or try to login."
        );
      } else if (error.code === "auth/wrong-password") {
        return toast.error(
          "You have entered wrong credentials, please verify."
        );
      } else {
        toast.error(msg.replace("Firebase: Error (", ""));
      }
    }
  };

  const headingColor = Cookies.get('headingColor')
  return (
    <div>
      <form method="POST" className="leftForm" onSubmit={logIn}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-64 border rounded-md text-gray-600"
            autoComplete="on"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            required
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-64 border rounded-md text-gray-800"
            autoComplete="on"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between w-64 text-gray-700">
          <hr
            style={{
              width: "80px",
              border: "1px solid grey",
              height: "1px",
            }}
          />
          OR
          <hr
            style={{
              width: "80px",
              border: "1px solid grey",
              height: "1px",
            }}
          />
        </div>
        <div className="externalLogIn">
          <button
            type="button"
            className="disabled w-60 rounded text-gray-500 border border-gray-400 hover:border-blue-400 hover:bg-blue-70 bg-white border-black-900 focus:ring focus:border-purple-900 px-4 py-2 my-2 flex justify-around items-center"
          >
            {/* <img src={googleIcon} alt="Login-with-google" className=" w-8" /> */}
            Login With Google
          </button>

          <button
            type="button"
            className=" w-60 rounded text-gray-500 border border-gray-400 hover:border-blue-400 hover:bg-blue-70 bg-white border-black-900 focus:ring focus:border-purple-900 px-4 py-2 my-2 flex justify-around items-center"
          >
            {/* <img
              src={facebookIcon}
              alt="Login-with-facebook"
              className=" w-8"
            /> */}
            Login With Facebook
          </button>
        </div>
        <br />

        <button
          type="submit"
          className=" bg-gray-800 hover:bg-gray-900 px-24 py-3 rounded-lg hover:rounded-2xl hover:scale-95 transition-all ease-in-out "
          style={{
            color: headingColor ? headingColor : "white"
          }}
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default SmSignInSubComp;
