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
  let RowColClassNameOne = 'col-xl-4 col-lg-6 col-sm-12'
  let RowColClassNameSecond = 'col-xl-4 col-lg-6 col-sm-12 mt-4 mt-md-4 mt-lg-0'
  let RowColClassNameThird = 'col-xl-4 col-lg-6 mt-4 mt-xl-0 col-sm-12'
    const data = [
        {
            id: 1,
            name:'ART COLLECTION',
            Image:{ImageA}
        }
    ]
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
          <div className="row pt-5">
            <div className={RowColClassNameOne}>
              <div className={CardClassName}>
                <div className={CardContentClassName}>
                {data.map((item) => (
                     <div key={item.name} item={ImageA} />
                       ))}
                  <p className={CardParaClassName}> Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage. </p>
                </div>
              </div>
            </div>
            <div className={RowColClassNameSecond}>
              <div className={CardClassName}>
                <div className={CardContentClassName}>
                  <img src={ImageB} alt="B" />
                  <p className={CardHeadingTag}>SPECIAL BULLIES</p>
                  <p className="m-0 text-white opacity-25  pt-4  text-base fw-normal ff-p"></p>
                  <span className={CardSpanFwMedium}>20 Buddybullies</span>
                  <span className={CardSpanFwNormal}> out of 10k will have a very</span>
                  <span className={CardSpanFwMedium}> special and ersonalized</span>
                  <span className={CardSpanFwNormal}> resembling of</span>
                  <span className={CardSpanFwMedium}> famous people</span>
                  <span className={CardSpanFwNormal}> who are into</span>
                  <span className={CardSpanFwMedium}> NFTs</span>
                  <span className={CardSpanFwNormal}> those will be available after the minting.</span>
                </div>
              </div>
            </div>
            <div className={RowColClassNameThird}>
              <div className={CardClassName}>
                <div className={CardContentClassName}>
                  <img src={ImageC} alt="C" />
                  <p className={CardHeadingTag}>BREEDING</p>
                  <div className="pt-3">
                    <span className={CardSpanFwNormal}> Our</span>
                    <span className={CardSpanFwMedium}> BuddyBullies</span>
                    <span className={CardSpanFwNormal}> will not come alone, as we will announce the</span>
                    <span className={CardSpanFwMedium}> breeding function</span>
                    <span className={CardSpanFwNormal}> after the minting and you will be able to get{" "}</span>
                    <span className={CardSpanFwMedium}> a PuppyBully</span>
                    <span className={CardSpanFwNormal}> for free.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className={RowColClassNameOne}>
              <div className={CardClassName}>
                <div className={CardContentClassName}>
                  <img src={ImageD} alt="D" />
                  <p className={CardHeadingTag}>DIGITALMARKETS</p>
                  <div className="pt-4">
                    <span className={CardSpanFwMedium}> Communicate with all the digital markets</span>
                    <span className={CardSpanFwNormal}> available in the</span>
                    <span className={CardSpanFwMedium}> Solana NFT</span>
                    <span className={CardSpanFwNormal}> world for getting our collection</span>
                    <span className={CardSpanFwMedium}> successfully listed</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={RowColClassNameSecond}>
              <div className={CardClassName}>
                <div className={CardContentClassName}>
                  <img src={ImageE} alt="E" />
                  <p className={CardHeadingTag}> MERCH</p>
                  <p className={CardParaClassName}></p>
                  <span className={CardSpanFwNormal}> The team is</span>
                  <span className={CardSpanFwMedium}> working on the future merch</span>
                  <span className={CardSpanFwNormal}> thet will be available for the community members directly on our webpage.</span>
                </div>
              </div>
            </div>
            <div className={RowColClassNameThird}>
              <div className={CardClassName}>
                <div className={CardContentClassName}>
                  <img src={ImageF} alt="F" />
                  <p className={CardHeadingTag}>CHARITY</p>
                  <div className="pt-4">
                    <span className={CardSpanFwNormal}> We will be giving</span>
                    <span className={CardSpanFwMedium}> 30% of the royalties to charity</span>
                    <span className={CardSpanFwNormal}> permanently and we will keep spending on marketing,promotions and partnership.</span>
                    <span className={CardSpanFwMedium}> 50% of the riyalties</span>
                    <span className={CardSpanFwNormal}> will go back to the</span>
                    <span className={CardSpanFwMedium}> community</span>
                    <span className={CardSpanFwNormal}> as rewards.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minting;
