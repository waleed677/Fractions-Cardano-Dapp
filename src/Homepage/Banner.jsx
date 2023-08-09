import { React, useState, useEffect, useRef } from "react";
import { Image, ModalHeader, Form, Button, InputGroup, Alert } from 'react-bootstrap';
import { QRCode } from '../assets/ImageIndex';
import Modal from 'react-bootstrap/Modal';
import { Banner1, Banner2 } from '../assets/ImageIndex';
import CopyToClipboard from 'react-copy-to-clipboard';
import { CardanoWallet } from '@meshsdk/react';
import { useAddress } from '@meshsdk/react';
import { BrowserWallet } from '@meshsdk/core';
import { Transaction } from '@meshsdk/core';
import { Circles } from "react-loader-spinner";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {bridgeInitialApi, bridgeFullApi } from '../wallets';

function BannerPage() {

    console.log(typeof(bridgeInitialApi))
    const newLocal = "addr1vyk5tu5r44w9etfanlkjuxdn6zvsrzhudrgvhzzkc2cmy6s4xwm2v";
    const [address, setAddress] = useState(newLocal);

    const inputRef = useRef(0);
    const wallets = BrowserWallet.getInstalledWallets();

    const [loading, setLoading] = useState(false);
    const [connected, setConnected] = useState(false);
    const [connectedWallet, setConnectedWallet] = useState();
    const [balance, setBalance] = useState();
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(false);
    const [response, setResponse] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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


    const handleConnectWallet = async (wallet) => {
        const status = await BrowserWallet.enable(wallet.name);
        const addresses = await status.getRewardAddresses();
        const signature = await status.signData(addresses[0], 'Fraction Estate');
        const balance = await status.getBalance();
        setConnectedWallet(status);
        // setBalance(balance[0].quantity.slice(0,5));

        status !== "" ? setConnected(true) : setConnected(false);
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
            console.log(txHash);
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



    const copyAddress = (e) => {
        alert("Copied");
        setAddress(newLocal);
    };
    return (
        <>
            <div className="banner" id="home">
                <div className="heading">
                    <h2>A new Era of Fractional <br />Ownership & Decentralization <br />of <span className="blue">Real Estate</span></h2>
                </div>
                <div className="banner_img">
                    <Image className="img-fluid" src={Banner1} />
                    <div className="text_banner">
                        <p className="text-center">Fraction.estate will be revolutionizing the real estate market by making it possible for anyone to fractionally buy, sell and invest in real world properties.</p>

                        {loading && <Circles
                            height="80"
                            width="80"
                            color="#7D6FE5 "
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />}
                        <button className="mt-2 btn btn-primary button" onClick={handleShowModal}>
                            {connected ? `Disconnect` : "Connect Wallet"}
                        </button>



                        <div style={{ width: "80%" }}>
                            {connected && <InputGroup className="mb-3 mt-5">
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
                    </div>
                    <Image className="img-fluid second" src={Banner2} />
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
                        {/* {wallets && wallets.map((wallet) => {
                            return <>
                                <div className="d-flex flex-row justify-content-start align-items-center" style={{ cursor: 'pointer' }} onClick={() => handleConnectWallet(wallet)}>
                                    <div className="p-1"><Image width={40} src={wallet.icon} /></div>
                                    <div className="p-1"><h2 style={{ fontSize: "24px" }}>{wallet.name}</h2></div>
                                </div>
                                <hr style={{
                                    opacity: "0.1"
                                }} />

                            </>


                        })} */}


                            {wallets && wallets.map((wallet) => {
                            return <>
                                <div className="d-flex flex-row justify-content-start align-items-center" style={{ cursor: 'pointer' }} onClick={() => handleConnectWallet(wallet)}>
                                    <div className="p-1"><Image width={40} src={wallet.icon} /></div>
                                    <div className="p-1"><h2 style={{ fontSize: "24px" }}>{wallet.name}</h2></div>
                                </div>
                                <hr style={{
                                    opacity: "0.1"
                                }} />

                            </>


                        })}


                    </div>

                </Modal.Body>
            </Modal>

            {/* Presale Info Modal */}
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

export default BannerPage;