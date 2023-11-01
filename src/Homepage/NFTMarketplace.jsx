import React from 'react';
import { Image } from 'react-bootstrap';
import {Marketplace1, Marketplace2, Marketplace3, Marketplace4} from '../assets/ImageIndex';

import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const simple = {
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            simple: {
                arrows: false,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            simple: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
};

function NFTMarket() {
    return (
        <>
            <div className="NFTmarketplace" id="market">
                <div className="heading">
                    <h4>Our NFT Marketplace</h4>
                    <p>We are creating a fractional real estate investment platform on the cardano blockchain, enabling users to trade fractional NFTs backed by real world properties.</p>
                    <button className="btn btn-primary button">View Demo</button>
                </div>
                <div className="slider_normal">
                    <Slider {...simple}>
                        <div>
                            <div className="nft_market">
                                <Image className="img-fluid" src={Marketplace1} />
                            </div>
                        </div>
                        <div className="nft_market">
                            <Image className="img-fluid" src={Marketplace2} />
                        </div>
                        <div className="nft_market">
                            <Image className="img-fluid" src={Marketplace3} />
                        </div>
                            <div className="nft_market">
                            <Image className="img-fluid" src={Marketplace4} />
                             </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default NFTMarket;
