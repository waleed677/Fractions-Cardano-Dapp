import { React, useState, useEffect  } from "react";
import { Navbar, Image, Nav } from 'react-bootstrap';
import { Logo } from '../assets/ImageIndex';
import { Link } from 'react-scroll';

import "react-toastify/dist/ReactToastify.css";
import Walletmodal from "../components/modal/modal";

function HeaderFinall() {
    const [sticky, setSticky] = useState("");
    const [show, setShow] = useState(false);


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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        <Nav.Link href="https://fraction.estate/whitepaper/Fraction_estate_whitepaper_v2.0.pdf" target="_blank" >Whitepaper</Nav.Link>
                        <Link spy={"true"} smooth={"true"} to="market">NFT Marketplace</Link>
                        <button className="btn btn-primary button" onClick={handleShow}>Buy FET Token</button>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Walletmodal show={show} handleClose={handleClose}/>

        </>
    );
}

export default HeaderFinall;
