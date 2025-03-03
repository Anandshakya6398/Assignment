import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../assets/log0.png'
import { FaGoogle } from "react-icons/fa";


const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard", { replace: true }); // Close the popup after login
  };
  const handleClose = () => {
    navigate("/"); // Redirect to home page when closing popup
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 relative">
        <button 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 cursor-pointer" 
          onClick={handleClose}>
          ✖
        </button>
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="logo" />
        </div>
        <h2 className="text-center text-gray-700 text-lg font-semibold mb-4">
          Sign in to your account
        </h2>
        <button className="w-full cursor-pointer bg-green-300 text-gray-700 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-400 transition">
          <FaGoogle/>
          <span >Sign in with Google</span>
        </button>
        <div className="text-center text-gray-500 my-4 text-sm">or continue with email</div>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-green-300 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-green-300 focus:outline-none"
            />
          </div>
        </div>
        <div className="text-right text-sm text-green-500 mt-2 cursor-pointer hover:underline">
          Password forgotten?
        </div>
        <button 
          onClick={handleLogin} 
          className="w-full cursor-pointer mt-4 bg-green-400 text-white py-2 rounded-lg hover:bg-green-500 transition">
          SIGN IN
        </button>
        <div className="text-center text-sm text-gray-600 mt-4">
          Do not have an account yet? <span className="text-green-500 cursor-pointer hover:underline">Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
