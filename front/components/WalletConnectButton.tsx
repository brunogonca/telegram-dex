import React, { useEffect, useState } from "react";
import Web3 from "web3";

const ConnectWallet: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Erro ao conectar a carteira:", error);
      }
    } else {
      alert(
        "MetaMask não está instalado. Por favor, instale-o para usar esta funcionalidade."
      );
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div>
      <h1>Conectar Carteira</h1>
      <button onClick={connectWallet}>Conectar Carteira</button>
      {account && <p>Carteira conectada: {account}</p>}
    </div>
  );
};

export default ConnectWallet;
