import React from "react";
import Ellipse3 from "../assets/images/Ellipse-3.png";
const Roadmap = () => {
  return (
    <div id="RoadMap" className="bg-blue mt_2 position-relative z-1 ">
      <div className="container-xl pt-5 ">
        <div className="position-absolute ellipse-3 z-n1 ">
          <img className=" w-100 " src={Ellipse3} alt="Ellipse-3" />
        </div>
        <h2 className="text-white text-center pt-5 "> Roadmap </h2>
        <div className="vertical-line pt-20">
          <div className="line-container right">
            <div className="p-5 ">
              <h2 className="text-4xl fw-semibold ff-p text-white ">
                Q-4, 2021
              </h2>
              <p className="text-base fw-normal ff-p text-white opacity-75 ">
                Blandit sed penatibus elit tortor fermentum velit donec. Id
                eleifend volutpat dolor netus auctor at. Volutpat sed auctor non
                in commodo, felis viverra risus tristique.
              </p>
            </div>
          </div>
          <div className="line-container left">
            <div className="p-5 ">
              <h2 className="text-4xl fw-semibold ff-p text-white  text-start  text-md-end ">
                Q-1, 2022
              </h2>
              <p className="text-base fw-normal ff-p text-white opacity-75  text-start  text-md-end">
                Blandit sed penatibus elit tortor fermentum velit donec. Id
                eleifend volutpat dolor netus auctor at. Volutpat sed auctor non
                in commodo, felis viverra risus tristique.
              </p>
            </div>
          </div>
          <div className="line-container right">
            <div className="p-5  align-end">
              <h2 className="text-4xl fw-semibold ff-p text-white ">
                Q-2, 2022
              </h2>
              <p className="text-base fw-normal ff-p text-white opacity-75 ">
                Blandit sed penatibus elit tortor fermentum velit donec. Id
                eleifend volutpat dolor netus auctor at. Volutpat sed auctor non
                in commodo, felis viverra risus tristique.
              </p>
            </div>
          </div>
        </div>
        <div className="max-786 mx-auto ">
          <p className="text-4xl fw-medium ff-p text-white text-center m-0 pt-5 ">
            And this just the begining , the team is working on more suprises
            for our community. Buddybullies stronger together !!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
