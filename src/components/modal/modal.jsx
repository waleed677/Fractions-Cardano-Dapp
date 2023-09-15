import { React, useState, useEffect, useRef, useContext } from "react";
import { Circles } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import CopyToClipboard from "react-copy-to-clipboard";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { QRCode } from "../../assets/ImageIndex";
import {
  Image,
  Form,
  Button,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import WalletConnectModal from "../walletConnectModal";
import WalletConnectedContext from "../../context/walletContext";
import { Transaction } from "@meshsdk/core";

const Walletmodal = (props) => {


  const walletStatus = useContext(WalletConnectedContext)  ;
  const inputRef = useRef(0);
  const { show, handleClose } = props;

  const newLocal = "addr1vyk5tu5r44w9etfanlkjuxdn6zvsrzhudrgvhzzkc2cmy6s4xwm2v";
  const [address, setAddress] = useState(newLocal);

  const [showWalletModal, setShowWalletModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState();
  const [balance, setBalance] = useState();


  useEffect(() => {
    walletStatus.isConnected ? setConnected(true) : setConnected(false);
    fetchBalance(walletStatus.details);
    setConnectedWallet(walletStatus.details);
  }, [walletStatus.isConnected])


  const copyAddress = (e) => {
    alert("Copied");
    setAddress(newLocal);
  };

  const fetchBalance = async (status) => {
    if(status !== undefined) {
        let balance = await status.getBalance();
        balance = parseInt(balance[0].quantity / 1000000).toFixed(2);
        setBalance(balance);
    }
   
  };

  const handleSubmitTransaction = async () => {
    setLoading(true);
    let value = inputRef.current.value;
    inputRef.current.value = value < 5 ? 5 : value;
    let wallet = connectedWallet;
    const adaValue = inputRef.current.value;

    const loveLace = adaValue * 1000000;
    try {
      const tx = new Transaction({ initiator: wallet }).sendLovelace(
        "addr1vyk5tu5r44w9etfanlkjuxdn6zvsrzhudrgvhzzkc2cmy6s4xwm2v",
        loveLace.toString()
      );
      const unsignedTx = await tx.build();
      const signedTx = await wallet.signTx(unsignedTx);
      const txHash = await wallet.submitTx(signedTx);
      if (txHash !== "") {
        setLoading(false);
        toast.success("Transaction Successful!", {
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
        toast.error("Something went wrong", {
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
      toast.error("Something went wrong", {
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
      inputRef.current.value = "";
    }
  };

  const handleShowModal = () => {
    if (!connected) {
      setShowWalletModal(true);
    } else {
      setConnected(false);
      walletStatus.updateWalletState(false)
    }
  };


  return (
    <>
      {/* Connect Wallet Modal */}

      <WalletConnectModal
        show={showWalletModal}
        handleClose={() => setShowWalletModal(false)}
      />

      {/* Presale Info Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="fet_headerr">
              <h4>
                <span className="blue">FET </span> Faucet Phase 1
              </h4>
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
              {loading && (
                <div className="d-flex justify-content-center">
                  <Circles
                    height="80"
                    width="80"
                    color="#7D6FE5 "
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>
              )}

              {connected && (
                <div className="body-modal">
                  <div className="under_p">
                    <p>1 ADA = 4 FET</p>
                    <p>1 FET = 0.25 ADA</p>
                    <p>Minimum purchase: 5 ADA</p>
                    <p>Mint fee: ~1.6 ADA + ~1.4 ADA (refunded)</p>
                  </div>
                </div>
              )}

              <div className="d-flex justify-content-center mt-3">
                {connected && (
                  <InputGroup className="mb-3 mt-1">
                    <Form.Control
                      placeholder="Enter ADA Amount"
                      ref={inputRef}
                      type="number"
                      min={5}
                    />
                    <Button
                      variant="outline-primary "
                      id="button-addon2"
                      onClick={handleSubmitTransaction}
                    >
                      Send
                    </Button>
                  </InputGroup>
                )}
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

              {!connected && (
                <div className="d-flex justify-content-center">
                  <button
                    className="mt-2 btn btn-primary button "
                    onClick={() => setShowWalletModal(true)}
                    style={{ width: "50%", textAlign: "center" }}
                  >
                    Connect Wallet
                  </button>
                </div>
              )}

              {connected && (
                <>
                  <div className="d-flex justify-content-center">
                    <Dropdown className="mt-2">
                      <Dropdown.Toggle
                        size="lg"
                        id="dropdown-basic"
                        style={{ backgroundColor: "#7D6FE5 " }}
                      >
                        {balance} ₳
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={handleShowModal}>
                          Disconnect
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="footer mt-3">
                    <p>
                      Note: FET Tokens will appear in your wallet after the
                      payment is successfully made and approved by blockchain,
                      it will take 10 network confirmations.
                    </p>
                  </div>
                </>
              )}
            </Tab>

            <Tab eventKey="profile" title="Buy Manually">
              <div className="body-modal">
                <div className="under_p">
                  <p>1 ADA = 4 FET</p>
                  <p>1 FET = 0.25 ADA</p>
                  <p>Minimum purchase: 5 ADA</p>
                  <p>Mint fee: ~1.6 ADA + ~1.4 ADA (refunded)</p>
                  <p>Send ADA to the address below</p>
                </div>
                <div className="qr">
                  <Image className="img-fluid" src={QRCode} />
                </div>
              </div>

              <div className="card_body">
                <h4>
                  <span className="blue">Faucet </span>Address
                </h4>
                <p>{address}</p>
                <CopyToClipboard text={address} onCopy={(e) => copyAddress(e)}>
                  <button className="button_main">Copy address</button>
                </CopyToClipboard>
              </div>
              <div className="footer">
                <p>
                  Please use only cardano native wallets like: Yoroi, Nami,
                  Adalite & etc. Don’t use any exchange wallets.
                </p>
                <p>
                  Note: FET Tokens will appear in your wallet after the payment
                  is successfully made and approved by blockchain, it will take
                  10 network confirmations. 
                </p>
              </div>
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Walletmodal;
