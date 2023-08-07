import { React, useState, useEffect } from "react";
import { Navbar, Image, Nav } from 'react-bootstrap';
import { Logo, QRCode } from '../assets/ImageIndex';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-scroll';
import CopyToClipboard from 'react-copy-to-clipboard';

function HeaderFinall() {
    const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 10 ? "is-sticky" : "";
    setSticky(stickyClass);
  };
  const classes = `navbar_house ${sticky}`;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [copyText, setCopyText] = useState('');
  
    // const handleCopyText = (e) => {
    //     let CopiedText = document.getElementById("textCopy").textContent;
    //         alert("Copied");
    //        setCopyText(CopiedText);

    //     setTimeout(() => {
    //         copy(copyText);
    //     }, 300);
    // } 
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
            <Navbar expand="lg" className={classes}>
                <Navbar.Brand href="#" spy={"true"} smooth={"true"}>
                    <Image className="img-fluid" src={Logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto links">
                        <Link activeClass="active" spy={"true"} smooth={"true"} to="token">Token</Link>
                        <Nav.Link href="https://fraction.estate/whitepaper/Fraction-Estate-Whitepaper-v1.1.pdf" target="_blank" >Whitepaper</Nav.Link>
                        <Link spy={"true"} smooth={"true"}  to="market">NFT Marketplace</Link>
                        <button className="btn btn-primary button" onClick={handleShow}>Buy FET Token</button>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

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

export default HeaderFinall;