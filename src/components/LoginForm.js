// LoginForm.js
import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom"; 
import { gapi } from "gapi-script";
import "./LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client: auth2", start);
  }, []);

  const [popupStyle, showPopup] = useState("hide");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  const popup = () => {
    const uppercaseUsername = username.toUpperCase();
    const uppercasePassword = password.toUpperCase();
  
    if (uppercaseUsername === "DEMO" && uppercasePassword === "PASSWORD") {
      onSuccess();
    } else {
      onFailure();
    }
  };
  
  
  const onSuccess = () => {
    setLoggedInUser(username); 
    showPopup("login-success");
    setTimeout(() => {
      showPopup("hide");
      navigate("/");
    }, 2000);
  };

    const onFailure = () => {
        alert("Username or password incorrect");
    };

    return (
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl mb-6 text-center">Login</h1>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full border border-gray-300 p-2 rounded-md outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 p-2 rounded-md outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div
              className="bg-blue-800 text-center px-4 py-2 text-white rounded-md cursor-pointer hover:bg-blue-700"
              onClick={popup}
            >
              Login
            </div>
            <p className="text text-center">Or login using</p>
      <div className="flex justify-center space-x-4">
        <div className="facebook bg-blue-500 w-10 h-10 rounded-full"></div>
        <div className="google">
          <GoogleLogin
            className="blue"
            clientId="79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com"
            buttonText=""
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={false}
            icon={false}
            theme="dark"
          />
        </div>
      </div>
      <div className={`mt-4 text-red-500 text-center ${popupStyle}`}>
        <h3>Login Successful</h3>
    <p>Welcome, {loggedInUser}!</p>
      </div>
    </div>
  </div>
);
};

export default LoginForm;
