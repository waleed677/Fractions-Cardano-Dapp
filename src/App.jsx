import { useState } from "react";
import Homepage from "./Homepage/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import { MeshProvider } from "@meshsdk/react";
import WalletState from "./context/walletState";

function App() {
  return (
    <>
      <WalletState>
        <MeshProvider>
          <div className="App">
            <Homepage />
          </div>
        </MeshProvider>
      </WalletState>
    </>
  );
}

export default App;
