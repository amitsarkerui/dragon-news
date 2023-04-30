import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContextProvider } from "../AuthContext/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ForgetPassword = () => {
  const { forgetPassword } = useContext(AuthContextProvider);
  const handleForgetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    forgetPassword(email)
      .then(() => {
        toast.info("Password Reset Link send to the email.");
        event.target.reset();
      })
      .catch((err) => {
        toast.info(err.message);
      });
  };
  return (
    <div className="mt flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Please write your email correctly
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleForgetPassword}
          className="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send Password Reset Link
            </button>
          </div>
        </form>
      </div>
      <div className="text-sm mt-6">
        <span className="font-semibold">
          Back to
          <Link className="underline text-blue-500 ml-2" to={"/login"}>
            Login
          </Link>
        </span>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ForgetPassword;
