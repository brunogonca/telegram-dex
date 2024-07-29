// front/pages/App.tsx
import React from "react";
import WalletConnectButton from "../components/WalletConnectButton";

const App: React.FC = () => {
  return (
    <div>
      <h1>Web3 Wallet Connection</h1>
      <WalletConnectButton />
    </div>
  );
};

export default App;
