import React from 'react';
import { Container, Row, Col, Image, Nav } from 'react-bootstrap';
import HeaderFinall from './HeaderFinal';
import BannerPage from './Banner';
import OurMissionPage from './OurMission';
import Fraction from './FractionDefault';
import NFTMarket from './NFTMarketplace';
import FractionToken from './FractionToken';
import TokenD from './TokenDistribution';
import {FooterLogo} from '../assets/ImageIndex';
import {Link} from 'react-scroll';
import { TeamMember, DummyUser, TeamTajinder } from '../assets/ImageIndex';

import './homepage.scss';

function HomepagePage() {



    return (
        <>
            <Container fluid>
                <Row className="w-100 mx-auto">
                    <Col xxl={11} className="mx-auto">
                        <section className="home_blockchain">
                            <Row>
                                <Col xxl={12}>
                                    <HeaderFinall />
                                </Col>
                                <Col xxl={12}>
                                    <BannerPage />
                                </Col>
                                <Col xxl={12}>
                                    <OurMissionPage />
                                </Col>
                            </Row>
                        </section>
                    </Col>
                </Row>
            </Container>
            <div className="fraction_background">
                <Fraction />
            </div>
            <Container fluid>
                <Row className="mx-auto w-100">
                    <Col xxl={11} className="mx-auto">
                        <Row>
                            <Col xxl={12}>
                                <NFTMarket />
                            </Col>
                            <Col xxl={12}>
                                <FractionToken/>
                            </Col>
                            <Col xxl={12}>
                                <TokenD/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <div className="fraction_team">
                <Container fluid>
                    <Row className="mx-auto w-100">
                        <Col xxl={11} className="mx-auto">
                            <Row>
                                <Col xxl={12}>
                                    <div className="heading">
                                        <h4><span className="blue">Fraction Estate</span> Team</h4>
                                        <p>Without a world-class team, no project can be successful!</p>
                                    </div>
                                </Col>
                                <Col xxl={6} lg={12} xs={12}>
                                    <div className="team_1 left">
                                        <Image className="img-fluid" src={TeamMember}/>
                                        <div className="daniel">
                                            <h4 className="daniel_d">Daniel Johnsen</h4>
                                            <p>CEO</p>
                                        </div>    
                                    </div>
                                </Col>
                                <Col xxl={6} lg={12} xs={12}>
                                    <div className="team_1 right">
                                        <Image className="img-fluid" src={TeamTajinder} />
                                        <div className="daniel">
                                            <h4 className="daniel_d">Tejinder Singh</h4>
                                            <p>Developer</p>
                                        </div>    
                                    </div>
                                </Col>
                                <Col xxl={6} lg={12} xs={12}>
                                    <div className="team_1 left">
                                        <Image className="img-fluid" src={DummyUser} />
                                        <div className="daniel">
                                            <h4 className="daniel_d">Revealing soon!</h4>
                                            <p>Head of investment</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={6} lg={12} xs={12}>
                                    <div className="team_1 right">
                                        <Image className="img-fluid" src={DummyUser} />
                                        <div className="daniel">
                                            <h4 className="daniel_d">Revealing soon!</h4>
                                            <p>Head of marketing</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>    

            <footer>
                <div className="footer_b">
                    <Container fluid>
                        <Row className="w-100 mx-auto">
                            <Col xxl={11} className="mx-auto">
                                <div className="footer_body">
                                    <Row>
                                        <Col xxl={6} lg={12} xs={12}>
                                            <Image className="img-fluid" src={FooterLogo}/>
                                            <p>Fraction.Estate tokenizes real world properties into NFTs and fractionalize them making real estate ownership easily accessible.</p>
                                            <div className="links">
                                                <ul>
                                                    <li>
                                                        <Nav.Link target="_blank" href="https://twitter.com/fractionestate" className="facebook">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="21" viewBox="0 0 29 21" fill="none">
                                                                <path d="M28.427 2.48573C27.3807 2.90814 26.2568 3.19239 25.0771 3.3206C26.2819 2.66463 27.2058 1.62601 27.6409 0.387619C26.5148 0.994889 25.2662 1.43618 23.9367 1.67471C22.8729 0.644044 21.3576 0 19.6804 0C16.4595 0 13.8486 2.37441 13.8486 5.30143C13.8486 5.71688 13.9011 6.12239 13.9995 6.50902C9.15282 6.28837 4.85606 4.17734 1.97843 0.969047C1.47769 1.75224 1.19014 2.66264 1.19014 3.63567C1.19014 5.47437 2.21896 7.0974 3.78351 8.04756C2.82794 8.01974 1.92814 7.7812 1.14204 7.38464C1.14204 7.4075 1.14204 7.42837 1.14204 7.45123C1.14204 10.0204 3.15156 12.1633 5.82037 12.6493C5.33165 12.7706 4.8156 12.8352 4.28315 12.8352C3.90814 12.8352 3.54188 12.8014 3.18655 12.7407C3.92892 14.8468 6.08277 16.3804 8.63459 16.4231C6.63927 17.8454 4.12462 18.6932 1.39131 18.6932C0.921184 18.6932 0.456521 18.6683 -0.000488281 18.6186C2.58085 20.1224 5.64544 21 8.93962 21C19.6673 21 25.5319 12.9216 25.5319 5.91566C25.5319 5.68607 25.5264 5.45748 25.5155 5.22987C26.6558 4.48147 27.6453 3.5482 28.427 2.48573Z" fill="white"/>
                                                            </svg>
                                                        </Nav.Link>
                                                    </li>
                                                    <li>
                                                        <Nav.Link target="_blank" href="https://discord.com/invite/GwnrktkGeT" className="facebook">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
                                                                <path d="M21.9742 1.75875C20.2949 0.937125 18.4994 0.340005 16.6223 0C16.3918 0.435875 16.1224 1.02214 15.9367 1.4885C13.9413 1.17468 11.9642 1.17468 10.0054 1.4885C9.81975 1.02214 9.5443 0.435875 9.3117 0C7.43253 0.340005 5.63497 0.939319 3.95575 1.7631C0.568751 7.11553 -0.349409 12.335 0.109672 17.4804C2.35611 19.2347 4.53317 20.3005 6.6735 20.9978C7.20196 20.2372 7.67327 19.4287 8.0793 18.5766C7.30601 18.2693 6.56536 17.8901 5.86554 17.4499C6.0512 17.3061 6.2328 17.1557 6.40826 17.0009C10.6767 19.0887 15.3144 19.0887 19.5319 17.0009C19.7094 17.1557 19.8909 17.3061 20.0746 17.4499C19.3727 17.8923 18.63 18.2715 17.8567 18.5788C18.2627 19.4287 18.732 20.2394 19.2625 21C21.4049 20.3026 23.584 19.2369 25.8304 17.4804C26.3691 11.5156 24.9102 6.34404 21.9742 1.75875ZM8.66081 14.316C7.37948 14.316 6.32867 13.0651 6.32867 11.5417C6.32867 10.0184 7.35704 8.76528 8.66081 8.76528C9.96462 8.76528 11.0154 10.0162 10.9929 11.5417C10.995 13.0651 9.96462 14.316 8.66081 14.316ZM17.2793 14.316C15.998 14.316 14.9472 13.0651 14.9472 11.5417C14.9472 10.0184 15.9755 8.76528 17.2793 8.76528C18.5831 8.76528 19.6339 10.0162 19.6114 11.5417C19.6114 13.0651 18.5831 14.316 17.2793 14.316Z" fill="white"/>
                                                            </svg>
                                                        </Nav.Link>
                                                    </li>
                                                    <li>
                                                        <Nav.Link target="_blank" href="https://t.me/FractionEstate" className="facebook">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
                                                                <path d="M25.3064 1.91178L21.4765 19.7323C21.1876 20.9901 20.4341 21.3031 19.3633 20.7106L13.5278 16.4679L10.7121 19.1398C10.4005 19.4473 10.1398 19.7044 9.5393 19.7044L9.95855 13.8406L20.774 4.19804C21.2442 3.78439 20.672 3.5552 20.0432 3.96886L6.67256 12.2754L0.916399 10.4978C-0.335678 10.1121 -0.358341 9.26248 1.17701 8.66995L23.6917 0.111831C24.7342 -0.273871 25.6463 0.341017 25.3064 1.91178Z" fill="white"/>
                                                            </svg>
                                                        </Nav.Link>
                                                    </li>
                                                    <li>
                                                        <Nav.Link target="_blank" href="https://facebook.com/FractionEstate" className="facebook">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                                <path d="M10.5 0C4.70114 0 0 4.7253 0 10.554C0 15.8453 3.87784 20.2142 8.93073 20.9775V13.3512H6.33293V10.577H8.93073V8.73101C8.93073 5.67468 10.4122 4.33288 12.9393 4.33288C14.1497 4.33288 14.7897 4.42307 15.0928 4.46433V6.88598H13.3689C12.296 6.88598 11.9213 7.90828 11.9213 9.06058V10.577H15.0656L14.6389 13.3512H11.9213V21C17.0463 20.301 21 15.8967 21 10.554C21 4.7253 16.2989 0 10.5 0Z" fill="white"/>
                                                            </svg>
                                                        </Nav.Link>
                                                    </li>
                                                    <li>
                                                        <Nav.Link target="_blank" href="https://www.instagram.com/fractionestate/" className="facebook">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                                <path d="M15.75 0H5.25C2.36276 0 0 2.36276 0 5.25V15.7505C0 18.637 2.36276 21.0005 5.25 21.0005H15.75C18.6372 21.0005 21 18.637 21 15.7505V5.25C21 2.36276 18.6372 0 15.75 0ZM19.2499 15.7505C19.2499 17.6799 17.6805 19.2504 15.75 19.2504H5.25C3.32037 19.2504 1.75009 17.6799 1.75009 15.7505V5.25C1.75009 3.32011 3.32037 1.75009 5.25 1.75009H15.75C17.6805 1.75009 19.2499 3.32011 19.2499 5.25V15.7505Z" fill="white"/>
                                                                <path d="M16.1884 6.12494C16.9132 6.12494 17.5009 5.53731 17.5009 4.81244C17.5009 4.08757 16.9132 3.49994 16.1884 3.49994C15.4635 3.49994 14.8759 4.08757 14.8759 4.81244C14.8759 5.53731 15.4635 6.12494 16.1884 6.12494Z" fill="white"/>
                                                                <path d="M10.5 5.25C7.59989 5.25 5.25 7.60014 5.25 10.5C5.25 13.3988 7.59989 15.7505 10.5 15.7505C13.3993 15.7505 15.75 13.3988 15.75 10.5C15.75 7.60014 13.3993 5.25 10.5 5.25ZM10.5 14.0004C8.56719 14.0004 7.00008 12.4333 7.00008 10.5C7.00008 8.56668 8.56719 7.00009 10.5 7.00009C12.4328 7.00009 13.9999 8.56668 13.9999 10.5C13.9999 12.4333 12.4328 14.0004 10.5 14.0004Z" fill="white"/>
                                                            </svg>
                                                        </Nav.Link>
                                                    </li>
                                                </ul>
                                                <div className="link_bottom">
                                                <p target="_blank" href="https://Suport@fraction.estate" className="facebook">
                                                    support@fraction.estate
                                                </p>
    
                                                <p target="_blank" href="https://Contact@fraction.estate" className="facebook">
                                                contact@fraction.estate
                                                </p>
                                                <p target="_blank" href="https://Marketing@fraction.estate" className="facebook">
                                                marketing@fraction.estate
                                                </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={6} lg={6} xs={12}>
                                            <div className="menus">
                                                <ul>
                                                    <li>
                                                        <Link activeClass="active" spy={true} smooth={true} to="token">Token</Link>
                                                    </li>
                                                    <li>
                                                    <Nav.Link href="https://fraction.estate/whitepaper/Fraction_estate_whitepaper_v2.0.pdf" target="_blank" >Whitepaper</Nav.Link>
                                                    </li>
                                                    <li>
                                                        <Link spy={true} smooth={true}  to="market">NFT Marketplace</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>    
                </div>
                <div className="footer_bottom">
                    <p>© 2023 fraction.estate AS - All rights reserved</p>
                </div>
            </footer>
        </>
    );
}

export default HomepagePage;

