import { React, useState, useEffect } from "react";
import { Image, Row, Col} from 'react-bootstrap';
import { NFTFraction } from '../assets/ImageIndex';

import "react-toastify/dist/ReactToastify.css";
import Walletmodal from "../components/modal/modal";

function FractionToken() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    return (
        <>
            <div className="fraction_token" id="token">
                <div className="heading">
                    <h4><span className="blue">Fraction Estate</span> Token</h4>
                    <p>Our Fraction Estate Token ($FET) is the utility token of the Fraction Estate marketplace platform. It will be used as a payment method for various features of the platform and as a fee mechanism for DeFi features. Purchase FET tokens from the faucet to get in on the ground floor and become a part of the future of real estate investment.</p>
                </div>
                <div className="fraction_body">
                    <Row>
                        <Col xxl={6} lg={12} md={12} xs={12}>
                            <div className="fraction_phase">
                                <Row>
                                    <Col xxl={3} lg={6} xs={6}>
                                        <div className="phase d_block">
                                            <h4>Development</h4>
                                            <h4>Launch MVP</h4>
                                            <h4>Complete</h4>
                                        </div>
                                    </Col>
                                    <Col xxl={2} lg={6} xs={6}>
                                        <div className="line-h">
                                            <div className="circle"></div>
                                            <div className="circle"></div>
                                            <div className="circle"></div>
                                        </div>
                                    </Col>
                                    <Col xxl={5} lg={12} className="fraction_estate_token_div">
                                        <div className="phase d_none">
                                            <h4>Phase 1</h4>
                                        </div>
                                        <h6 className="presale_h6 d_block">Phase 1 </h6>
                                        <div className="presale mb-3">
                                            <h4>0.25 ADA</h4>
                                            <h6>(1 ADA= 4 FET)</h6>
                                            <p>14 million FET tokens</p>
                                        </div>
                                        <div className="phase d_none">
                                            <h4>Phase 2</h4>
                                        </div>
                                        <h6 className="presale_h6 d_block">Phase 2 </h6>
                                        <div className="presale mb-3">
                                            <h4>0.5 ADA</h4>
                                            <h6>(1 ADA= 2 FET)</h6>
                                            <p>35 million FET tokens</p>
                                        </div>
                                        <div className="phase d_none">
                                            <h4>Phase 3</h4>
                                        </div>
                                        <h6 className="presale_h6 d_block">Phase 3 </h6>
                                        <div className="presale">
                                            <h4>0.75 ADA</h4>
                                            <h6>(1 ADA= 1.33 FET)</h6>
                                            <p>21 million FET tokens</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xxl={6} lg={12} md={12} xs={12}>
                            <div className="token_img">
                                <Image className="img-fluid" src={NFTFraction} />
                            </div>    
                        </Col>
                        <Col xxl={12}>
                            <button className="btn btn-primary button" onClick={handleShow}>Buy Tokens</button>
                        </Col>
                    </Row>
                </div>
            </div>


            <Walletmodal  show={show} handleClose={handleClose}/>
        </>
    );
}

export default FractionToken;