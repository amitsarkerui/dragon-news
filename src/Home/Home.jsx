import React from "react";
import LeftSideBar from "../components/Shared/LeftSideBar/LeftSideBar";
import Main from "../components/Shared/Main/Main";
import RightSideBar from "../components/Shared/RightSideBar/RightSideBar";

const Home = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-4">
      <div className="col-span-1">
        <LeftSideBar />
      </div>
      <div className="col-span-4">
        <Main />
      </div>
      <div className="col-span-1">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
