import Accordion from 'react-bootstrap/Accordion';
import Ellipse4 from "../assets/images/Ellipse-4.png";
const Faq = () => {
  return (
    <div id="Faq" className="bg-blue position-relative z-1  mt_2">
      <div className="position-absolute ellipse-4 z-n1">
        <img className=" w-100" src={Ellipse4} alt="Ellips'-4" />
      </div>
      <div className="container-xl  container-faq  pt-5 pb-5">
        <h2 className="text-white text-center text-5xl fw-semibold ff-p pt-5 ">
          FAQs
        </h2>
        <div className="position-relative  z-2 pt-5 ">
          <Accordion className="accordion-flush" id="accordionFlushExample" defaultActiveKey="0">
          <div className="accordion-item bg-transparent border-0 mb-3">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed bs-card collapsed text-xl fw-medium ff-m text-white rounded-pill overflow-hidden shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What's the blockchain the buddybullies call home ?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body text-white text-base fw-medium ff-m">
                  Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus
                  mattis adipiscing ornare arcu vitae enim. Proin turpis enim
                  egestas sed in accumsan, feugiat neque turpis. Fringilla dui
                  donec nullam faucibus vitae non, integer. Non.
                </div>
              </div>
            </div>
            <div className="accordion-item bg-transparent border-0 mb-3">
              <h2 className="accordion-header" id="flush-headingtwo">
                <button
                  className="accordion-button collapsed bs-card collapsed text-xl fw-medium ff-m text-white rounded-pill overflow-hidden shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsetwo"
                  aria-expanded="false"
                  aria-controls="flush-collapsetwo"
                >
                  What's the blockchain the buddybullies call home ?
                </button>
              </h2>
              <div
                id="flush-collapsetwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingtwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body text-white text-base fw-medium ff-m">
                  Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus
                  mattis adipiscing ornare arcu vitae enim. Proin turpis enim
                  egestas sed in accumsan, feugiat neque turpis. Fringilla dui
                  donec nullam faucibus vitae non, integer. Non.
                </div>
              </div>
            </div>
            <div className="accordion-item bg-transparent border-0 mb-3">
              <h2 className="accordion-header" id="flush-headingthree">
                <button
                  className="accordion-button collapsed bs-card collapsed text-xl fw-medium ff-m text-white rounded-pill overflow-hidden shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsethree"
                  aria-expanded="false"
                  aria-controls="flush-collapsethree"
                >
                  What's the blockchain the buddybullies call home ?
                </button>
              </h2>
              <div
                id="flush-collapsethree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingthree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body text-white text-base fw-medium ff-m">
                  Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus
                  mattis adipiscing ornare arcu vitae enim. Proin turpis enim
                  egestas sed in accumsan, feugiat neque turpis. Fringilla dui
                  donec nullam faucibus vitae non, integer. Non.
                </div>
              </div>
            </div>

            <div className="accordion-item bg-transparent border-0">
              <h2 className="accordion-header" id="flush-headingfour">
                <button
                  className="accordion-button collapsed bs-card collapsed text-xl fw-medium ff-m text-white rounded-pill overflow-hidden shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsefour"
                  aria-expanded="false"
                  aria-controls="flush-collapsefour"
                >
                  What's the blockchain the buddybullies call home ?
                </button>
              </h2>
              <div
                id="flush-collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body text-white text-base fw-medium ff-m">
                  Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus
                  mattis adipiscing ornare arcu vitae enim. Proin turpis enim
                  egestas sed in accumsan, feugiat neque turpis. Fringilla dui
                  donec nullam faucibus vitae non, integer. Non.
                </div>
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
