import React from 'react'
import Slider from "react-slick";
import NextArrowIcon from '../../assets/images/png/arrow-next.png';
import BackArrowIcon from '../../assets/images/png/arrow-back.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../button/button';
import SectionTitle from '../section-title/section-title';
import { data } from '../../constants/data';

const NftMarketPace = () => {
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src={NextArrowIcon} alt="next-arrow" />
      </div>
    );
  }

  function BackArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src={BackArrowIcon} alt="back-arrow" />
      </div>
    );
  }

  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <BackArrow />
  };
  return (
    <div className="nft__market--section">
      <div className="section__title--text">
        <SectionTitle
          title="Our NFT Marketplace"
          subTitle="We are creating a fractional real estate investment platform on the cardano blockchain, enabling users to trade fractional NFTs backed by real world properties."
        />
        <Button
          buttonText="Coming Soon"
        />
      </div>
      <Slider {...settings}>
        {
          data.nftSlider.map((x, i) => (
            <div className="nft__market--wrap" key={i}>
              <div className="nft__market--caption">
                <img src={x.nthSliderImage} alt="slide-one" />
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default NftMarketPace
