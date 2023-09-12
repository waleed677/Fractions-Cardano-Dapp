import { React, useState, useEffect } from "react";
import {
  Image
} from "react-bootstrap";

import { Banner1, Banner2 } from "../assets/ImageIndex";

import "react-toastify/dist/ReactToastify.css";

import Walletmodal  from "../components/modal/modal";

function BannerPage() {

  // Modal State
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyAddress = (e) => {
    alert("Copied");
    setAddress(newLocal);
  };
  return (
    <>
      <div className="banner" id="home">
        <div className="heading">
          <h2>
            Revolutionizing the <br />
            Real Estate Market with <br />
            <span className="blue">Fractional NFT's</span>
          </h2>
        </div>
        <div className="banner_img">
          <Image className="img-fluid" src={Banner1} />
          <div className="text_banner">
            <p className="text-center">
              At Fraction.Estate, we're dedicated to making real estate
              investment accessible and affordable for everyone. Our platform
              leverages the power of blockchain technology and asset
              tokenization to bring a new era of fractional ownership and
              decentralization to the real estate market.
            </p>

            <button
              className="mt-2 btn btn-primary button"
              onClick={handleShow}
            >
              Buy Tokens
            </button>
          </div>
          <Image className="img-fluid second" src={Banner2} />
        </div>
      </div>


      {/* wallet Modal */}
       <Walletmodal show = {show} handleClose= {handleClose}/>
   
    </>
  );
}

export default BannerPage;
