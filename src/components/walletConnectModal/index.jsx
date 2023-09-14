import { React, useEffect, useState, useContext } from "react";
import { BrowserWallet } from "@meshsdk/core";
import { Vespr } from "../../assets/ImageIndex";
import Modal from "react-bootstrap/Modal";
import { Image } from "react-bootstrap";
import WalletConnectedContext from "../../context/walletContext";

const WalletConnectModal = (props) => {
  const walletStatus = useContext(WalletConnectedContext);

  const { show, handleClose, callBack, isConnected } = props;

  const wallets = BrowserWallet.getInstalledWallets();
  console.log(wallets)

 
  const handleConnectVespr = async () => {
    const status = await BrowserWallet.enable('VESPR');
    const addresses = await status.getRewardAddresses();
    const signature = await status.signData(addresses[0], "Fraction Estate");
    status !=="" ? walletStatus.updateWalletState(true) :   walletStatus.updateWalletState(false)
    walletStatus.updateWalletDetails(status)
    handleClose();
  }

  const handleConnectWallet = async (wallet) => {
    const status = await BrowserWallet.enable(wallet.name);
    const addresses = await status.getRewardAddresses();
    const signature = await status.signData(addresses[0], "Fraction Estate");
    status !=="" ? walletStatus.updateWalletState(true) :   walletStatus.updateWalletState(false)
    walletStatus.updateWalletDetails(status)
    handleClose();
  };



  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="fet_headerr">
            <h4>
              <span className="blue">Connect Your Wallet </span>{" "}
            </h4>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column">
          {wallets &&
            wallets.filter((wallet) => wallet.name === 'VESPR')
            .map((wallet) => {
              return (
                <div key={wallet.name}>
                  <div
                    className="d-flex flex-row justify-content-start align-items-center"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleConnectWallet(wallet)}
                  >
                    <div className="p-1">
                      <Image width={40} src={wallet.icon} />
                    </div>
                    <div className="p-1">
                      <h2 style={{ fontSize: "24px" }}>{wallet.name}</h2>
                    </div>
                  </div>
                  <hr
                    style={{
                      opacity: "0.1",
                    }}
                  />
                </div>
              );
            })}

          {/* <div
            className="d-flex flex-row justify-content-start align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => handleConnectVespr()}
          >
            <div className="p-1">
              <Image width={40} src={Vespr} />
            </div>
            <div className="p-1">
              <h2 style={{ fontSize: "24px" }}>Vespr</h2>
            </div>
          </div> */}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default WalletConnectModal;
