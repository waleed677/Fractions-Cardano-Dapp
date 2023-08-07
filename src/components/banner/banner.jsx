import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Cross from '../../assets/images/png/cross.png';
import bannerBackground from '../../assets/images/png/banner.png'
import Button from '../button/button'
import QRCode from '../../assets/images/png/VendingQR1.png';
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement();

const Banner = ( {props} ) => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000';
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <section className="banner__section--main" style={{ backgroundImage: 'url('+bannerBackground+')' }}>
      <div className="container">
        <div className="banner__section--inner">
          <h1>A new Era of Fractional Ownership &amp; Decentralization of <span className="highlight__text">Real Estate</span></h1>
          <p>Fraction.estate will be revolutionizing the real estate market by making it possible for anyone to fractionally buy, sell and invest in real world properties.</p>
          <button
            buttonText="Buy Presale"
            className="button_main"
            onClick={openModal}
          >
          Buy Presale
          </button>
          <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          >
          
          <div className="header-modal">
            <div className="fet">
              <h4><span className="blue">FET </span> Presale Phase 1</h4>
              <button onClick={closeModal} className="closeModal">
                <img className="img-fluid" src={Cross}/>
              </button>
            </div>  
          </div>
          <div className="body-modal">  
            <div className="under_p">
              <p>1 ADA = 4 FET</p>
              <p>1 FET = 0.25 ADA</p>
              <p>Minimum purchase: 5 ADA</p>
              <p>Send ADA to the address below</p>
            </div>  
            <div className="qr">
              <img className="img-fluid" src={QRCode}/>
            </div>
          </div> 

          <div className="card_body">
            <h4><span className="blue">Presale </span>Address</h4>
            <p>addr1vyk5tu5r44w9etfanlkjuxdn6zvsrzhudrgvhzzkc2cmy6s4xwm2v</p>
            <button className="button_main">Copy address</button>
          </div> 
            <div className="footer">
              <p>
Please use only cardano native wallets like: Yoroi, Nami, Adalite & etc. Don’t use any exchange wallets.

Note: FET Tokens will appear in your wallet after the payment is successfully made and approved by blockchain, it will take 10 network confirmations. The processing fees will be around 1.5 or 2 ADA.
</p>
            </div>
          </Modal>
          <div className="banner__section--link">
            <Router>
              <Link to="/">Join the real estate revolution!</Link>
            </Router>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner