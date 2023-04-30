import React, { useContext, useEffect, useState } from "react";
import { AuthContextProvider } from "../../../AuthContext/AuthContext";
import Main from "../Main/Main";

const LeftSideBar = () => {
  const { news } = useContext(AuthContextProvider);
  const sliceNews = news.slice(0, 4);
  console.log("From Left--->", sliceNews);
  return (
    <div>
      <div>
        <h1 className="text-lg font-bold text-gray-800 mb-3">All Category</h1>
        <ul className="list-none">
          <li className="text-gray-400 font-semibold my-2 cursor-pointer bg-gray-100 py-3 rounded-md hover:bg-gray-100 pl-4">
            All News
          </li>
          <li className="text-gray-400 font-semibold my-2 cursor-pointer py-3 rounded-md hover:bg-gray-100 pl-4">
            National
          </li>
          <li className="text-gray-400 font-semibold my-2 cursor-pointer py-3 rounded-md hover:bg-gray-100 pl-4">
            Politics
          </li>
          <li className="text-gray-400 font-semibold my-2 cursor-pointer py-3 rounded-md hover:bg-gray-100 pl-4">
            International News
          </li>
          <li className="text-gray-400 font-semibold my-2 cursor-pointer py-3 rounded-md hover:bg-gray-100 pl-4">
            Entertainment
          </li>
          <li className="text-gray-400 font-semibold my-2 cursor-pointer py-3 rounded-md hover:bg-gray-100 pl-4">
            Culture
          </li>
          <li className="text-gray-400 font-semibold my-2 cursor-pointer py-3 rounded-md hover:bg-gray-100 pl-4">
            Arts
          </li>
        </ul>
      </div>
      {sliceNews.map((singleNews) => (
        <div className="mb-10" key={singleNews._id}>
          <img src={singleNews.thumbnail_url} alt="" />
          <h2 className="mt-2 text-lg font-semibold text-gray-500">
            {singleNews.title}
          </h2>
          <button className="btn btn-outline mt-4">See Details</button>
          <hr className="mt-10" />
        </div>
      ))}
    </div>
  );
};

export default LeftSideBar;
