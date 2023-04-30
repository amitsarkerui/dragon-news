import React, { useContext } from "react";
import { AuthContextProvider } from "../../../AuthContext/AuthContext";
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Main = () => {
  const { news } = useContext(AuthContextProvider);
  return (
    <div>
      {news.map((singleNews) => (
        <div className="p-5 border rounded-lg mb-7" key={singleNews._id}>
          <div className="flex justify-between py-5 px-10 bg-blue-50 rounded-md">
            <div className="flex items-center gap-2">
              <img
                className="w-12 rounded-full"
                src={singleNews.author.img}
                alt=""
              />
              <div>
                <h3 className="font-medium">
                  {singleNews.author.name
                    ? singleNews.author.name
                    : "No Name Found"}
                </h3>
                <p>
                  {singleNews.author.published_date
                    ? singleNews.author.published_date
                    : "No Date Found"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-blue-300 text-xl">
              <FaBookmark />
              <FaShareAlt />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold w-3/4 leading-relaxed my-4">
              {singleNews.title}
            </h2>
            <img className="w-full mb-5" src={singleNews.image_url} alt="" />
            <p>
              {singleNews.details.slice(0, 400)}

              <Link
                to={`/details/${singleNews._id}`}
                className="ml-2 cursor-pointer underline font-semibold text-blue-500"
              >
                Read More
              </Link>
            </p>
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
                <p className="font-semibold">({singleNews.rating.number})</p>
              </div>
              <div className="flex items-center gap-2">
                <FaEye />
                <p className="font-semibold">{singleNews.total_view}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
