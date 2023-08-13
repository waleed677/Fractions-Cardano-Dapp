import { React, useState, useEffect, useRef } from "react";
import { Image, Row, Col, Navbar, Nav, Form, Button, InputGroup, Dropdown } from 'react-bootstrap';
import { NFTFraction } from '../assets/ImageIndex';
import { QRCode } from '../assets/ImageIndex';
import Modal from 'react-bootstrap/Modal';
import CopyToClipboard from 'react-copy-to-clipboard';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { BrowserWallet } from '@meshsdk/core';
import { Transaction } from '@meshsdk/core';
import { Circles } from "react-loader-spinner";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function FractionToken() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const inputRef = useRef(0);
    const wallets = BrowserWallet.getInstalledWallets();

    const [loading, setLoading] = useState(false);
    const [connected, setConnected] = useState(false);
    const [connectedWallet, setConnectedWallet] = useState();
    const [balance, setBalance] = useState();
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        if (!connected) {
            setShowModal(true);
        } else {
            setConnected(false);
        }
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const fetchBalance = async (status) => {
        let balance = await status.getBalance();
        balance = parseInt(balance[0].quantity / 1000000).toFixed(2);
        setBalance(balance);
    }


    const handleConnectWallet = async (wallet) => {
        const status = await BrowserWallet.enable(wallet.name);
        const addresses = await status.getRewardAddresses();
        const signature = await status.signData(addresses[0], 'Fraction Estate');

        fetchBalance(status);

        status !== "" ? setConnected(true) : setConnected(false)
        setConnectedWallet(status);
        setShowModal(false);

    }

    const handleSubmitTransaction = async () => {
        setLoading(true);
        let value = inputRef.current.value;
        inputRef.current.value = value < 5 ? 5 : value;
        let wallet = connectedWallet;
        const adaValue = inputRef.current.value;

        const loveLace = adaValue * 1000000;
        try {
            const tx = new Transaction({ initiator: wallet })
                .sendLovelace(
                    'addr1vyk5tu5r44w9etfanlkjuxdn6zvsrzhudrgvhzzkc2cmy6s4xwm2v',
                    loveLace.toString()
                )
                ;

            const unsignedTx = await tx.build();
            const signedTx = await wallet.signTx(unsignedTx);
            const txHash = await wallet.submitTx(signedTx);
            if (txHash !== "") {
                setLoading(false);
                toast.success('Transaction Successful!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                fetchBalance(wallet);
            } else {
                setLoading(false);
                toast.error('Something went wrong', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
            toast.error('Something went wrong', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        if (inputRef.current) {
            inputRef.current.value = '';
        }
    }

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

            
            {/* Connect Wallet Modal */}

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className="fet_headerr">
                            <h4><span className="blue">Connect Your Wallet </span> </h4>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column">
                        {wallets && wallets.map((wallet) => {
                            return <div key={wallet.name}>
                                <div className="d-flex flex-row justify-content-start align-items-center" style={{ cursor: 'pointer' }} onClick={() => handleConnectWallet(wallet)}>
                                    <div className="p-1"><Image width={40} src={wallet.icon} /></div>
                                    <div className="p-1"><h2 style={{ fontSize: "24px" }}>{wallet.name}</h2></div>
                                </div>
                                <hr style={{
                                    opacity: "0.1"
                                }} />
                            </div>



                        })}

                    </div>

                </Modal.Body>
            </Modal>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className="fet_headerr">
                            <h4><span className="blue">FET </span> Faucet Phase 1</h4>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        justify
                    >
                        <Tab eventKey="home" title="Connect Wallet">



                            {loading &&
                                <div className="d-flex justify-content-center">
                                    <Circles
                                        height="80"
                                        width="80"
                                        color="#7D6FE5 "
                                        ariaLabel="circles-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                    /></div>}

                            {connected &&
                                <div className="body-modal">
                                    <div className="under_p">
                                        <p>1 ADA = 4 FET</p>
                                        <p>1 FET = 0.25 ADA</p>
                                        <p>Minimum purchase: 5 ADA</p>
                                    </div>

                                </div>

                            }


                            <div className="d-flex justify-content-center mt-3" >
                                {connected &&

                                    <InputGroup className="mb-3 mt-1">
                                        <Form.Control
                                            placeholder="Enter ADA Amount"
                                            ref={inputRef}
                                            type="number"
                                            min={5}

                                        />
                                        <Button variant="outline-primary " id="button-addon2" onClick={handleSubmitTransaction}>
                                            Send
                                        </Button>
                                    </InputGroup>
                                }
                                <ToastContainer
                                    position="top-center"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="light"
                                />
                                {/* {response && <Alert variant="info">{response}</Alert>} */}
                            </div>


                            {!connected &&
                                <div className="d-flex justify-content-center">
                                    <button className="mt-2 btn btn-primary button " onClick={handleShowModal} style={{ width: "50%", textAlign: "center" }}>
                                        Connect Wallet
                                    </button>
                                </div>
                            }

                            {connected &&
                                <>
                                    <div className="d-flex justify-content-center">
                                        <Dropdown className="mt-2" >
                                            <Dropdown.Toggle size="lg" id="dropdown-basic" style={{ backgroundColor: "#7D6FE5 " }} >
                                                {balance} ₳
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={handleShowModal}>Disconnect</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>

                                    <div className="footer mt-3">
                                        <p>
                                            Note: FET Tokens will appear in your wallet after the payment is successfully made and approved by blockchain, it will take 10 network confirmations. The processing fees will be around 1.5 or 2 ADA.
                                        </p>
                                    </div>
                                </>
                            }
                        </Tab>

                        <Tab eventKey="profile" title="Buy Manually">
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
                                <h4><span className="blue">Faucet </span>Address</h4>
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
                        </Tab>

                    </Tabs>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default FractionToken;