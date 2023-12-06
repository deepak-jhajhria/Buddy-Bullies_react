import React from "react";
import Bullister1 from "../assets/images/Prime-Bullister.png";
import solvrdor from "../assets/images/Solvador-Bulli.png";
import Meta from "../assets/images/Meta-Bully.png";
const Team = () => {
  return (
    <div id="Team" className="bg-blue mt_2">
      <div className="container-xl pt-5 pb-5 ">
        <p className="m-0 text-white text-center text-5xl fw-semibold ff-p">
          Our Team
        </p>
        <div className="row pt-4 pb-5 ">
          <div className="col-xl-4 col-lg-6 ">
            <div className="d-flex flex-column align-items-center ">
              <img src={Bullister1} alt="Prime Bullister " />
              <p className="m-0 text-4xl fw-semibold ff-p text-white pt-3">
                Prime Bullister{" "}
              </p>
              <p className="m-0 text-lg fw-normal ff-p text-white ">
                Pruduct Designer
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 mt-5 mt-lg-0 ">
            <div className="d-flex flex-column align-items-center ">
              <img src={solvrdor} alt="Solvador Bulli" />
              <p className="m-0 text-4xl fw-semibold ff-p text-white pt-3">
                Solvador Bulli
              </p>
              <p className="m-0 text-lg fw-normal ff-p text-white ">Artist</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 mt-5 mt-xl-0 ">
            <div className="d-flex flex-column align-items-center">
              <img src={Meta} alt="Meta Bully" />
              <p className="m-0 text-4xl fw-semibold ff-p text-white pt-3">
                Meta Bully
              </p>
              <p className="m-0 text-lg fw-normal ff-p text-white ">
                Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
