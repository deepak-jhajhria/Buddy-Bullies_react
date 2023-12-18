import React from "react";
import Gif from "../assets/images/ezgif-6-99e160664e9b.gif";
import Ellipse1 from "../assets/images/Ellipse-1.png";
import Ellipse2 from "../assets/images/Ellipse-2.png";
import ImageA from "../assets/images/A.png";
import ImageB from "../assets/images/B.png";
import ImageC from "../assets/images/C.png";
import ImageD from "../assets/images/D.png";
import ImageE from "../assets/images/E.png";
import ImageF from "../assets/images/F.png";
import BrandLogoIcon from "./BrandLogoIcon";
import { Card, CardBody, CardHeader, CardText, Col, Container, Row } from "react-bootstrap";
const Minting = () => {
  let CardClassName = "bs-card rounded-4 h-100";
  let CardContentClassName = "p-4";
  let CardParaClassName =
    "m-0 text-white opacity-50  ff-p text-base pt-4  fw-normal";
  let CardHeadingTag = "m-0 text-white pt-5 text-4xl fw-semibold ff-p";
  let RowColClassNameOne = "col-xl-4 ml-4 col-sm-6 col-12 mb-4";
  const CardValue = [
    {
      id: "1",
      heading: "ART COLLECTION",
      image: ImageA,
      discription: "Art Collection",
      para: " Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage. ",
    },
    {
      id: "2",
      heading: "SPECIAL BULLIES",
      image: ImageB,
      discription: "SPECIAL BULLIES",
      para: "<b class=fw-medium >20 Buddybullies </b> {out of 10k} will have a very <b class=fw-medium> special and ersonalized </b> resembling of <b class=fw-medium> famous people </b> who are into <b class=fw-medium> NFTs </b> {those will be available after the minting}.",
    },
    {
      id: "3",
      heading: "BREEDING",
      image: ImageC,
      discription: "SPECIAL BULLIES",
      para: "Our <b class=fw-medium >Buddybullies </b> will not come alone, as we will announce the <b class=fw-medium >breeding function</b> after the minting and you will be able to get a PuppyBully { for free}.",
    },
    {
      id: "4",
      heading: "DIGITALMARKETS",
      image: ImageD,
      discription: "DIGITALMARKETS",
      para: "Communicate with all the digital markets available in the Solana NFT world  for getting our collection successfully listed.",
    },
    {
      id: "5",
      heading: "MERCH",
      image: ImageE,
      discription: "SPECIAL BULLIES",
      para: "The team is working on the future merch thet will be available for the community members directly on our webpage.",
    },
    {
      id: "6",
      heading: "CHARITY",
      image: ImageF,
      discription: "SPECIAL BULLIES",
      para: 'We will be giving 30% of the <b class="fw-medium"> royalties </b> to charity <strong>permanently</strong> and we will keep spending on marketing, promotions and partnership.50% of the riyalties will go back to the community as rewards.',
    },
  ];
  const listingComponents = CardValue.map((listing) => (
    <Col key={listing.id} className={RowColClassNameOne}>
      <Card className={CardClassName}>
        <CardBody className={CardContentClassName}>
          <img src={listing.image} alt={listing.discription} />
          <CardHeader className={CardHeadingTag}>{listing.heading}</CardHeader>
          <CardText className={CardParaClassName}
            dangerouslySetInnerHTML={{ __html: listing.para }}
          ></CardText>
        </CardBody>
      </Card>
    </Col>
  ));
  return (
    <div id="Minting" className="bg-blue position-relative z-1 pt-2 -m-1">
      <div className="linear-gradient d-none d-md-block z-n1"></div>
      <Container>
        <Row>
          <Col xs={{ order: 1 }} md={{span:6,order:1}}>
            <img className="w-100 z-1" src={Gif} alt="image-1" />
            <div className="position-absolute ellipse-1 d-none d-md-block z-n1">
              <img className="w-100" src={Ellipse1} alt="Ellipse-1" />
            </div>
            <div className="position-absolute d-none d-md-block ellipse-2 z-n1">
              <img className="w-100" src={Ellipse2} alt="Ellipse-2" />
            </div>
          </Col>
          <Col xs={{ order: 0 }} md={{ order: 1,span:6 }} className="d-flex align-items-md-end justify-content-md-end" >
            <div className="pe-lg-5 p-0 me-0  me-lg-5 me-md-4">
              <p className="m-0 text-white text-5xl fw-semibold ff-p p-0">
                Mint Your Bat
              </p>
              <p className="m-0 text-white text-4xl fw-medium ff-p pt-3 pt-md-4 pt-lg-5  p-0">
                Minting: 1,5 SOL
              </p>
              <p className="m-0 text-white text-base fw-normal ff-p opacity-75 text-decoration-line-through p-0">
                Before 2 SOL
              </p>
              <p className="m-0 text-white text-4xl fw-medium ff-p pt-3 p-0">
                Whitelist: 0,88 SOL
              </p>
              <p className="m-0 text-white text-base fw-normal ff-p opacity-75 text-decoration-line-through p-0">
                Before 1 SOL
              </p>
              <div className="pt-3 pt-md-4 pt-lg-5 p-0">
                <button className="bg-white text-black rounded-pill px-3 py-2 text-base fw-medium ff-p">
                  Coming soon
                </button>
              </div>
              <div className="mt-4">
                <BrandLogoIcon />
              </div>
            </div>
          </Col>
        </Row>
        <div className="pt-5">
          <Row className="pt-5 ">{listingComponents}</Row>
        </div>
      </Container>
    </div>
  );
};

export default Minting;
