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
const Minting = () => {
  let CardClassName = 'card bs-card rounded-4 h-100'
  let CardContentClassName= 'card-body p-4'
  let CardParaClassName = 'm-0 text-white opacity-50  ff-p text-base pt-4  fw-normal'
  let CardSpanFwNormal = 'm-0 text-white opacity-50  ff-p text-xl fw-normal'
  let CardSpanFwMedium = 'm-0 text-white opacity-50  ff-p text-xl fw-medium'
  let CardHeadingTag ='m-0 text-white pt-5 text-4xl fw-semibold ff-p'
  let RowColClassNameOne = 'col-xl-4 ml-4 col-sm-6 col-12 mb-4'
  
  const CardValue = [
      {
          "id":'1',
          'heading':'ART COLLECTION',
          "image":ImageA,
          "discription":"Art Collection",
          "para":" Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage. "
      },
      {
          "id":'2',
          'heading':'SPECIAL BULLIES',
          "image":ImageB,
          "discription":"SPECIAL BULLIES",
          "para":"20 Buddybullies {out of 10k} will have a very special and ersonalized resembling of famous people who are into NFTs {those will be available after the minting}."
      },
      {
          "id":'3',
          'heading':'BREEDING',
          "image":ImageC,
          "discription":"SPECIAL BULLIES",
          "para":"Our BuddyBullies will not come alone, as we will announce the breeding function after the minting and you will be able to get a PuppyBully { for free}."
      },
      {
          "id":'4',
          'heading':'DIGITALMARKETS',
          "image":ImageD,
          "discription":"DIGITALMARKETS",
          "para":"Communicate with all the digital markets available in the Solana NFT world  for getting our collection successfully listed."
      },
      {
          "id":'5',
          'heading':'MERCH',
          "image":ImageE,
          "discription":"SPECIAL BULLIES",
          "para":"The team is working on the future merch thet will be available for the community members directly on our webpage."
      },
      {
          "id":'6',
          'heading':'CHARITY',
          "image":ImageF,
          "discription":"SPECIAL BULLIES",
          "para":"We will be giving 30% of the royalties to charity permanently and we will keep spending on marketing, promotions and partnership.50% of the riyalties will go back to the community as rewards."
      },
  ]
    const listingComponents= CardValue.map((listing) => (
        <div className={RowColClassNameOne}>
          <div className={CardClassName}>
            <div className={CardContentClassName}>
              <img src={listing.image} alt={listing.discription}/>
              <h2 className={CardHeadingTag}>{listing.heading}</h2>
              <p className={CardParaClassName}>{listing.para}</p>
            </div>
          </div>
        </div>
      ))
  return (
    <div id="Minting" className="bg-blue position-relative z-1 pt-2 -m-1">
      <div className="linear-gradient d-none d-md-block z-n1"></div>
      <div className="container-xxl ">
        <div className="row">
          <div className="order-2 order-md-1 col-md-6">
            <img className="w-100 z-1 " src={Gif} alt="image-1" />
            <div className="position-absolute ellipse-1 d-none d-md-block z-n1">
              <img className="w-100" src={Ellipse1} alt="Ellipse-1" />
            </div>
            <div className="position-absolute d-none d-md-block ellipse-2 z-n1">
              <img className="w-100" src={Ellipse2} alt="Ellipse-2" />
            </div>
          </div>
          <div className="d-flex align-items-md-end justify-content-md-end order-1 col-md-6">
            <div className="pe-lg-5 p-0 me-0  me-lg-5 me-md-4">
              <p className="m-0 text-white text-5xl fw-semibold ff-p p-0">Mint Your Bat</p>
              <p className="m-0 text-white text-4xl fw-medium ff-p pt-3 pt-md-4 pt-lg-5  p-0">Minting: 1,5 SOL</p>
              <p className="m-0 text-white text-base fw-normal ff-p opacity-75 text-decoration-line-through p-0">Before 2 SOL</p>
              <p className="m-0 text-white text-4xl fw-medium ff-p pt-3 p-0">Whitelist: 0,88 SOL</p>
              <p className="m-0 text-white text-base fw-normal ff-p opacity-75 text-decoration-line-through p-0">Before 1 SOL</p>
              <div className="pt-3 pt-md-4 pt-lg-5 p-0">
                <button className="bg-white text-black rounded-pill px-3 py-2 text-base fw-medium ff-p">Coming soon</button>
              </div>
              <div className="mt-4"><BrandLogoIcon /></div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="row pt-5 ">
            {listingComponents}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minting;
