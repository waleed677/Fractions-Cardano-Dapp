import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../section-title/section-title';
import { data } from '../../constants/data';

const FractionEstateImpact = () => {

  const settingsNew = {
    dots: true,
    nav: false,
    className: "fraction__estate--center",
    centerMode: true,
    autoplay: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
  };
  return (
    <div className="fraction__estate--section">
      <SectionTitle
        title={[<span className="highlight__text">Fraction Estate </span>, "Impact"]}
        subTitle="Real Estate tokenization is a promising utilization of blockchain innovation that will expand the financial backer base by expanding liquidity on the lookout, since it considers all the more limited scale financial backer cooperation."
      />
      <Slider {...settingsNew}>
        {
          data.fractionEstateSlider.map((x, i) => (
            <div className="fraction__estate--wrap" key={i}>
              <div className="fraction__estate--caption">
                <div className="fraction__estate--inner">
                  <img src={x.fractionEstateImage} alt={x.fractionEstateTitle} />
                  <h2>{x.fractionEstateTitle}</h2>
                </div>
              </div>
            </div>
          ))
        }
        {/* <div className="fraction__estate--wrap">
          <div className="fraction__estate--caption">
            <div className="fraction__estate--inner">
              <img src={liquidityRealEstate} alt="Liquidity of Real Estate" />
              <h2></h2>
            </div>
          </div>
        </div>
        <div className="fraction__estate--wrap">
          <div className="fraction__estate--caption">
            <div className="fraction__estate--inner">
              <img src={accessSecondaryMarket} alt="Access To Secondary Market" />
              <h2>Access to secondary market</h2>
            </div>
          </div>
        </div>
        <div className="fraction__estate--wrap">
          <div className="fraction__estate--caption">
            <div className="fraction__estate--inner">
              <img src={crushingTheEntryBarrier} alt="Crushing the entry barrier" />
              <h2>Crushing the entry barrier</h2>
            </div>
          </div>
        </div>
        <div className="fraction__estate--wrap">
          <div className="fraction__estate--caption">
            <div className="fraction__estate--inner">
              <img src={liquidityRealEstate} alt="Liquidity of Real Estate" />
              <h2> Liquidity of Real Estate</h2>
            </div>
          </div>
        </div>
        <div className="fraction__estate--wrap">
          <div className="fraction__estate--caption">
            <div className="fraction__estate--inner">
              <img src={accessSecondaryMarket} alt="Access To Secondary Market" />
              <h2>Access to secondary market</h2>
            </div>
          </div>
        </div> */}
      </Slider>
    </div>
  )
}

export default FractionEstateImpact;
