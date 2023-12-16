import React from "react";
import { Button, Container } from "react-bootstrap";
const Sec1 = () => {
  return (
    <Container className="h-screen d-flex position-relative z-3">
      <div className="my-auto">
        <div className="d-flex flex-column">
          <p className="m-0 text-white text-7xl fw-normal ff-p">Vitae nunc,</p>
          <p className=" m-0 text-white text-7xl fw-bold ff-p">blandit a odio</p>
        </div>
        <p className="m-0 text-white max-547 lh-lg text-xl fw-medium ff-p pb-2 pb-sm-3 pb-md-4  pb-lg-5 pt-2 opacity-75"> Semper in egestas risus id tempus. Pellentesque dolor eros sollicitudin feugiat ut odio semper. Mattis fermentum eget ut vestibulum dolor diam</p>
        <Button className="btn bg-white text-black rounded-pill  mt-2 mb-2 text-3xl fw-medium ff-p" href="#">Get Started</Button>
      </div>
    </Container>
  );
};

export default Sec1;
