import { React, useState, useEffect } from "react";
import { Image, Row, Col } from 'react-bootstrap';
import { NFTFraction } from '../assets/ImageIndex';
import { QRCode } from '../assets/ImageIndex';
import Modal from 'react-bootstrap/Modal';
import CopyToClipboard from 'react-copy-to-clipboard';

function FractionToken() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const newLocal = "addr1vyk5tu5r44w9etfanlkjuxdn6zvsrzhudrgvhzzkc2cmy6s4xwm2v";
      const [address, setAddress] = useState(newLocal);
    
      const copyAddress = (e) => {
        alert("Copied");
        setAddress(newLocal);
      };
    return (
        <>
            <div className="fraction_token" id="token">
                <div className="heading">
                    <h4><span className="blue">Fraction Estate</span> Token</h4>
                    <p>The Fraction Estate ($FET) Token is the utility token of the Fraction Estate marketplace platform. It will be used as a payment method for various features of the platform and as a fee mechanism for DeFi features.</p>
                </div>
                <div className="fraction_body">
                    <Row>
                        <Col xxl={6} lg={12} md={12} xs={12}>
                            <div className="fraction_phase">
                                <Row>
                                    <Col xxl={3} lg={6} xs={6}>
                                        <div className="phase d_block">
                                            <h4>Phase 1</h4>
                                            <h4>Phase 2</h4>
                                            <h4>Phase 3</h4>
                                        </div>
                                    </Col>
                                    <Col xxl={2} lg={6} xs={6}>
                                        <div className="line-h">
                                            <div className="circle"></div>
                                            <div className="circle"></div>
                                            <div className="circle"></div>
                                        </div>
                                    </Col>
                                    <Col xxl={5} lg={12}>
                                        <div className="phase d_none">
                                            <h4>Phase 1</h4>
                                        </div>
                                        <h6 className="presale_h6 d_block">Presale </h6>
                                        <div className="presale mb-3">
                                            <h4>0.25 ADA</h4>
                                            <h6>(1 ADA= 4 FET)</h6>
                                            <p>14 million FET tokens</p>
                                        </div>
                                        <div className="phase d_none">
                                            <h4>Phase 2</h4>
                                        </div>
                                        <h6 className="presale_h6 d_block">Presale </h6>
                                        <div className="presale mb-3">
                                            <h4>0.5 ADA</h4>
                                            <h6>(1 ADA= 2 FET)</h6>
                                            <p>35 million FET tokens</p>
                                        </div>
                                        <div className="phase d_none">
                                            <h4>Phase 3</h4>
                                        </div>
                                        <h6 className="presale_h6 d_block">Presale </h6>
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
                            <button className="btn btn-primary button" onClick={handleShow}>Buy Now in Presale</button>
                        </Col>
                    </Row>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className="fet_headerr">
                            <h4><span className="blue">FET </span> Presale Phase 1</h4>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-modal">
                        <div className="under_p">
                            <p>1 ADA = 4 FET</p>
                            <p>1 FET = 0.25 ADA</p>
                            <p>Minimum purchase: 5 ADA</p>
                            <p>Send ADA to the address below</p>
                        </div>
                        <div className="qr">
                            <Image className="img-fluid" src={QRCode} />
                        </div>
                    </div>

                    <div className="card_body">
                        <h4><span className="blue">Presale </span>Address</h4>
                        <p>{address}</p>
                        <CopyToClipboard
                        text={address}
                        onCopy={(e) => copyAddress(e)}
                      >
                        <button className="button_main">Copy address</button>
                        </CopyToClipboard>
                    </div>
                    <div className="footer">
                        <p>
                            Please use only cardano native wallets like: Yoroi, Nami, Adalite & etc. Don’t use any exchange wallets.
                        </p>
                        <p>
                        Note: FET Tokens will appear in your wallet after the payment is successfully made and approved by blockchain, it will take 10 network confirmations. The processing fees will be around 1.5 or 2 ADA.
                        </p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FractionToken;