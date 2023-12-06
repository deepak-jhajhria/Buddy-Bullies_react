import React from "react";
import BrandLogoIcon from "./BrandLogoIcon";
const links= {
  link1:'Roadmap',
  link2:'FAQs',
  Link3: 'Mint your Bully'
}
let LinksClassName = 'text-white text-sm fw-normal ff-p text-decoration-none'
const Footer = () => {
  return (
    <div id="JoinUs" className="bg-footer mt_2 bg-blue">
      <div className="container-xxl pt-5">
        <p className="m-0 text-white text-center text-5xl fw-semibold ff-p pt-2 pt-sm-3 pt-md-4 pt-lg-5">
          JOIN US
        </p>
        <div className="d-flex justify-content-between flex-lg-row flex-column pt-2 pt-sm-3 pt-md-4 pt-lg-5 align-items-lg-center">
          <div className="d-flex flex-column gap-2 gap-sm-3">
            <p className="m-0 text-white text-4xl fw-medium ff-p">LOGO</p>
            <p className="m-0 text-white text-base fw-normal ff-p max-388 opacity-75">
              Aenean arcu sed rhoncus sapien euismod cursus morbi lacus,blandit.
              Placerat tortor duis fames cras pellentesque duiadipiscing neque
              gravida. Sociis neque consectetur id quispharetra.
            </p>
            <a className="m-0 text-white text-base fw-normal ff-p pb-4 pb-lg-5 text-decoration-none list-unstyled" href="mailto:">Email@gmail.com</a>
          </div>
          <div className="d-flex gap-3 gap-sm-4 gap-lg-5 flex-sm-row flex-column ">
            <div className="d-flex flex-column gap-2 me-5 ">
              <p className="text-white text-base fw-medium ff-p m-0">Resources</p>
              <a className={LinksClassName} href="#"> {links.link1}</a>
              <a className={LinksClassName} href="#">{links.link2}</a>
              <a className={LinksClassName} href="#">{links.Link3}</a>
            </div>
            <div className="align-items-end ms-0 ms-sm-5">
              <p className="text-white text-base fw-medium ff-p">Community</p>
              <BrandLogoIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
