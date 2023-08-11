import React from 'react';
import {  Image } from 'react-bootstrap';
import {FractionBench, Liquidity, Access} from '../assets/ImageIndex';
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
};

function Fraction() {
    return (
        <>
            <div className="fraction_estate">
                <div className="heading">
                    <h4><span className="blue">Invest in Real Estate </span> on the Cardano Blockchain</h4>
                    <p className="mt-3">Fraction.Estate is built on the Cardano blockchain, providing a secure and transparent investment platform. Our NFT marketplace allows users to trade fractional NFTs backed by real-world properties, giving you the ability to invest in a new asset class with the peace of mind that comes with blockchain technology. Real Estate tokenization is a promising utilization of blockchain innovation that will expand the financial backer base by expanding liquidity on the lookout, since it considers all the more limited scale financial backer cooperation.</p>
                </div>
                <div>
                    <Slider {...settings}>
                        <div>
                            <div className="fraction_icon">
                                <Image className="img-fluid" src={FractionBench} />
                                <p>Crushing the entry barrier</p>
                            </div>
                        </div>
                        <div>
                            <div className="fraction_icon">
                                <Image className="img-fluid" src={Liquidity} />
                                <p> Liquidity of Real Estate</p>
                            </div>
                        </div>
                        <div>
                            <div className="fraction_icon">
                                <Image className="img-fluid" src={Access} />
                                <p>Access to secondary market</p>
                            </div>
                        </div>
                        <div>
                            <div className="fraction_icon">
                                <Image className="img-fluid" src={FractionBench} />
                                <p>Crushing the entry barrier</p>
                            </div>
                        </div>
                        <div>
                            <div className="fraction_icon">
                                <Image className="img-fluid" src={Liquidity} />
                                <p>Liquidity of Real Estate</p>
                            </div>
                        </div>
                        <div>
                            <div className="fraction_icon">
                                <Image className="img-fluid" src={Access} />
                                <p>Access to secondary market</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Fraction;