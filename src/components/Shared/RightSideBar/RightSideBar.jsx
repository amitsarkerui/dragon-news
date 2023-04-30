import React from "react";
import {
  FaGooglePlusG,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div>
      <div>
        <h1 className="text-lg font-bold text-gray-800 mb-3">Login with</h1>
        <button className="w-full text-center btn btn-primary btn-outline">
          <div className="flex items-center mx-auto">
            <FaGooglePlusG className="text-xl mr-2" />
            <span className="font-semibold">Continue with Google</span>
          </div>
        </button>
        <button className="w-full text-center btn btn-outline mt-3">
          <div className="flex items-center mx-auto">
            <FaGithub className="text-xl mr-2" />
            <span className="font-semibold">Continue with Github</span>
          </div>
        </button>
      </div>
      <div className="mt-10">
        <h1 className="text-lg font-bold text-gray-800 mb-3">Find us on</h1>
        <button className="w-full text-center btn btn-active btn-ghost">
          <div className="flex items-center mx-auto">
            <FaFacebook className="text-xl mr-2" />
            <span className="font-semibold">Facebook</span>
          </div>
        </button>
        <button className="w-full text-center btn btn-active btn-ghost mt-2">
          <div className="flex items-center mx-auto">
            <FaTwitter className="text-xl mr-2" />
            <span className="font-semibold">Twitter</span>
          </div>
        </button>
        <button className="w-full text-center btn btn-active btn-ghost mt-2">
          <div className="flex items-center mx-auto">
            <FaInstagram className="text-xl mr-2" />
            <span className="font-semibold">Instagram</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
