import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
  let NavlinksClassName = 'navLinks text-decoration-none pe-lg-3 text-nowrap text-white linksLine text-lg fw-medium ff-p'
  let LiClassName ='list-unstyled'
  let UlClassName ='align-items-center d-flex Mobileview gap-5 text-decoration-none m-0 p-0'
  
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
  return (
    <Navbar className="py-3">
      <Container className="d-flex align-items-center justify-content-between">
        <a className="text-white text-2xl fw-600 ff-p text-decoration-none  " href="#">Logo</a>
        <ul className={UlClassName}>
          <li className={LiClassName}><Nav.Link onClick={NavLinks} className={NavlinksClassName} href="#Minting">Minting</Nav.Link></li>
          <li className={LiClassName}><Nav.Link onClick={NavLinks} className={NavlinksClassName} href="#RoadMap">Road Map</Nav.Link></li>
          <li className={LiClassName}><Nav.Link onClick={NavLinks} className={NavlinksClassName} href="#Faq">Faq</Nav.Link></li>
          <li className={LiClassName}><Nav.Link onClick={NavLinks} className={NavlinksClassName} href="#Team">Team</Nav.Link></li>
          <li className={LiClassName}><Nav.Link onClick={NavLinks} className={NavlinksClassName} href="#JoinUs">Join Us</Nav.Link></li>
        </ul>
        <label onClick={Menu} className="Menu z-5 d-md-none"><span className="span1"></span><span className="mt-2 span2"></span><span className="mt-2 span3"></span></label>
      </Container>
    </Navbar>
  );
};

export default NavBar;
