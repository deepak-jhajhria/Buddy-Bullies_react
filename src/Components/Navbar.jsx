import React from "react";
const Navbar = () => {
  function Menu() {
    document.querySelector(".Mobileview").classList.toggle("end-0");
    document.querySelector("body").classList.toggle("overflow-hidden");
    document.querySelector(".span1").classList.toggle("span4");
    document.querySelector(".span2").classList.toggle("span5");
    document.querySelector(".span3").classList.toggle("span6");
  }
  function NavLinks() {
    document.querySelector(".Mobileview").classList.remove("end-0");
    document.querySelector("body").classList.remove("overflow-hidden");
    document.querySelector(".span1").classList.remove("span4");
    document.querySelector(".span2").classList.remove("span5");
    document.querySelector(".span3").classList.remove("span6");
  }
let NavlinksClassName = 'navLinks text-decoration-none pe-lg-3 text-nowrap text-white linksLine text-lg fw-medium ff-p'
let LiClassName ='list-unstyled'
let UlClassName ='align-items-center d-flex Mobileview gap-5 text-decoration-none m-0 p-0'
  return (
    <nav className="py-3">
      <div className="container-xxl d-flex align-items-center justify-content-between">
        <a className="text-white text-2xl fw-600 ff-p text-decoration-none  " href="#">Logo</a>
        <ul className={UlClassName}>
          <li className={LiClassName}><a onClick={NavLinks} className={NavlinksClassName} href="#Minting">Minting</a></li>
          <li className={LiClassName}><a onClick={NavLinks} className={NavlinksClassName} href="#RoadMap">Road Map</a></li>
          <li className={LiClassName}><a onClick={NavLinks} className={NavlinksClassName} href="#Faq">Faq</a></li>
          <li className={LiClassName}><a onClick={NavLinks} className={NavlinksClassName} href="#Team">Team</a></li>
          <li className={LiClassName}><a onClick={NavLinks} className={NavlinksClassName} href="#JoinUs">Join Us</a></li>
        </ul>
        <label onClick={Menu} className="Menu z-5 d-md-none"><span className="span1"></span><span className="mt-2 span2"></span><span className="mt-2 span3"></span></label>
      </div>
    </nav>
  );
};

export default Navbar;
