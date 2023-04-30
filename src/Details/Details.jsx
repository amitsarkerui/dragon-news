import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NavTop from "../NavTop/NavTop";
import Navbar from "../Navbar/Navbar";
import LeftSideBar from "../components/Shared/LeftSideBar/LeftSideBar";
import RightSideBar from "../components/Shared/RightSideBar/RightSideBar";
import { FaEye, FaStar } from "react-icons/fa";

const Details = () => {
  const newsId = useParams();
  console.log(newsId);
  const news = useLoaderData();
  const detailNews = news.find((singleNews) => singleNews._id === newsId._id);
  console.log(detailNews);
  return (
    <div>
      <NavTop />
      <Navbar />
      <div className="mt-6 container mx-auto grid grid-cols-1 md:grid-cols-6 gap-6">
        <LeftSideBar className="col-span-1" />
        <div className="col-span-4 p-5 border rounded-lg mb-7">
          <img className="w-full" src={detailNews.image_url} alt="" />
          <h2 className="text-2xl font-bold w-3/4 leading-relaxed my-4">
            {detailNews.title}
          </h2>
          <p className="text-lg text-gray-600">{detailNews.details}</p>
          <hr className="my-8" />
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex gap-1 text-orange-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="font-semibold">({detailNews.rating.number})</p>
            </div>
            <div className="flex items-center gap-2">
              <FaEye />
              <p className="font-semibold">{detailNews.total_view}</p>
            </div>
          </div>
        </div>
        <RightSideBar className="col-span-1" />
      </div>
    </div>
  );
};

export default Details;
