import React, { useState } from "react";
import WalletConnectedContext from "./walletContext";
import { data } from "jquery";

const WalletState = (props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [details, setDetails] = useState();

  const updateWalletState = (value) => {
    setIsConnected(value);
  };

  const updateWalletDetails = (data) => {
    setDetails(data);
  };

  return (
    <WalletConnectedContext.Provider
      value={{ isConnected, details, updateWalletState, updateWalletDetails }}
    >
      {props.children}
    </WalletConnectedContext.Provider>
  );
};

export default WalletState;
