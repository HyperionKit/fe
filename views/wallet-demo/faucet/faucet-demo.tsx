"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ethers } from 'ethers';
import styles from './faucet.module.css';

interface TokenInfo {
  symbol: string;
  address: string;
  claimAmount: string;
  balance: string;
}

export default function FaucetPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [transactionStatus, setTransactionStatus] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  const [totalClaimedValue, setTotalClaimedValue] = useState("0.0");
  const [lastClaimTime, setLastClaimTime] = useState<Date | null>(null);
  const [canClaim, setCanClaim] = useState(true);
  const [error, setError] = useState("");

  // Faucet configuration based on hyperion.md
  const faucetTokens: TokenInfo[] = [
    {
      symbol: "USDT",
      address: "0x51d36B792bB9418F938490B7d73B99eb45Af1CD3",
      claimAmount: "100.0",
      balance: "0.0"
    },
    {
      symbol: "DAI",
      address: "0x95EaA826e3671a749ABE201EF33BDa0CAd3C243C",
      claimAmount: "100.0",
      balance: "0.0"
    },
    {
      symbol: "WETH",
      address: "0x9D81C1a89bE608417B5Bb1C1cF5858594D01E8a3",
      claimAmount: "1.0",
      balance: "0.0"
    },
    {
      symbol: "WMETIS",
      address: "0xeC53e4a54b3AB36fb684966c222Ff6f347C7e84c",
      claimAmount: "10.0",
      balance: "0.0"
    }
  ];

  // Faucet contract address - this should be updated with the actual deployed contract address
  const faucetContractAddress = "0x2D0A7db2679A5A8c328a2dDD73f367759DD048D6";
  const claimCooldown = 86400; // 24 hours in seconds

  useEffect(() => {
    // Check if user can claim based on last claim time
    if (lastClaimTime) {
      const now = new Date();
      const timeDiff = Math.floor((now.getTime() - lastClaimTime.getTime()) / 1000);
      setCanClaim(timeDiff >= claimCooldown);
    }
  }, [lastClaimTime, claimCooldown]);

  const connectWallet = async () => {
    if (typeof window === 'undefined' || !window.ethereum) {
      setError('MetaMask is not installed. Please install MetaMask to continue.');
      return;
    }

    setTransactionStatus("Connecting wallet...");
    setError('');
    
    try {
      // Request account access
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }) as string[];
      const account = accounts[0];
      setWalletAddress(account);

      // Create provider and signer
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();
      
      setProvider(provider);
      setSigner(signer);
      setIsConnected(true);
      setTransactionStatus("Wallet connected successfully!");
      
      // Clear status after 3 seconds
      setTimeout(() => setTransactionStatus(""), 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to connect wallet');
      setTransactionStatus("");
    }
  };

  const claimTokens = async () => {
    if (!isConnected || !signer) {
      setTransactionStatus("Please connect your wallet first.");
      return;
    }

    if (!canClaim) {
      const remainingTime = claimCooldown - Math.floor((new Date().getTime() - lastClaimTime!.getTime()) / 1000);
      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      setTransactionStatus(`You can claim again in ${hours}h ${minutes}m`);
      return;
    }

    setTransactionStatus("Claiming tokens from faucet...");
    setError('');
    
    try {
      // Faucet contract ABI (minimal for claiming)
      const faucetABI = [
        "function claim() external",
        "function lastClaimTime(address) external view returns (uint256)"
      ];
      
      const faucetContract = new ethers.Contract(faucetContractAddress, faucetABI, signer);
      
      // Check if user can claim
      const lastClaim = await faucetContract.lastClaimTime(walletAddress);
      const lastClaimDate = new Date(Number(lastClaim) * 1000);
      const now = new Date();
      const timeDiff = Math.floor((now.getTime() - lastClaimDate.getTime()) / 1000);
      
      if (timeDiff < claimCooldown) {
        const remainingTime = claimCooldown - timeDiff;
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        setTransactionStatus(`You can claim again in ${hours}h ${minutes}m`);
        return;
      }
      
      // Execute claim transaction
      const tx = await faucetContract.claim();
      setTransactionHash(tx.hash);
      
      // Wait for transaction confirmation
      const receipt = await tx.wait();
      
      if (receipt.status === 1) {
        setLastClaimTime(new Date());
        setCanClaim(false);
        
        // Calculate total claimed value
        const totalValue = faucetTokens.reduce((sum, token) => {
          return sum + parseFloat(token.claimAmount);
        }, 0);
        setTotalClaimedValue(totalValue.toString());
        
        setTransactionStatus("Successfully claimed tokens from faucet!");
      } else {
        setTransactionStatus("Transaction failed. Please try again.");
      }
      
      // Clear status after 5 seconds
      setTimeout(() => setTransactionStatus(""), 5000);
      
    } catch (err: any) {
      setError(err.message || 'Failed to claim tokens');
      setTransactionStatus("Failed to claim tokens. Please try again.");
    }
  };

  const getTimeUntilNextClaim = () => {
    if (!lastClaimTime || canClaim) return null;
    
    const now = new Date();
    const timeDiff = Math.floor((now.getTime() - lastClaimTime.getTime()) / 1000);
    const remainingTime = claimCooldown - timeDiff;
    
    if (remainingTime <= 0) {
      setCanClaim(true);
      return null;
    }
    
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const [countdown, setCountdown] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const timeUntil = getTimeUntilNextClaim();
      setCountdown(timeUntil);
    }, 1000);

    return () => clearInterval(timer);
  }, [lastClaimTime, canClaim]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h1 className={styles.cardTitle}>🚰 Hyperion Faucet</h1>
          <p className={styles.cardDescription}>
            Get test tokens for development and testing on the Hyperion network.
          </p>
          {isConnected && (
            <div className={styles.transactionInfo}>
              <p>Total value claimed via Hyperkit Faucet</p>
              <p className={styles.amount}>${totalClaimedValue}</p>
              <p className={styles.transactionDetails}>
                Txn hash: {transactionHash || 'pending'} | Faucet
              </p>
            </div>
          )}
        </div>

        <div className={styles.cardContent}>
          {error && (
            <div className={styles.errorStatus}>
              <p className={styles.errorText}>{error}</p>
            </div>
          )}
          {!isConnected ? (
            <div className={styles.connectSection}>
              <h3 className={styles.connectTitle}>Connect Wallet</h3>
              <button 
                onClick={connectWallet} 
                className={styles.connectButton}
              >
                Connect to MetaMask
              </button>
            </div>
          ) : (
            <div className={styles.faucetSection}>
              <div className={styles.walletInfo}>
                <p className={styles.walletLabel}>Connected Wallet:</p>
                <p className={styles.walletAddress}>{walletAddress}</p>
              </div>

              <div className={styles.tokensList}>
                <h3 className={styles.tokensTitle}>Available Tokens:</h3>
                <div className={styles.tokenGrid}>
                  {faucetTokens.map((token, index) => (
                    <div key={index} className={styles.tokenCard}>
                      <div className={styles.tokenInfo}>
                        <span className={styles.tokenSymbol}>{token.symbol}</span>
                        <span className={styles.tokenAmount}>{token.claimAmount}</span>
                      </div>
                      <div className={styles.tokenAddress}>
                        {token.address.slice(0, 6)}...{token.address.slice(-4)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.claimSection}>
                <div className={styles.claimInfo}>
                  <p className={styles.claimLabel}>Claim Cooldown:</p>
                  <p className={styles.claimValue}>24 hours</p>
                </div>
                
                {countdown && (
                  <div className={styles.countdownSection}>
                    <p className={styles.countdownLabel}>Next claim available in:</p>
                    <p className={styles.countdownTimer}>{countdown}</p>
                  </div>
                )}

                <button
                  onClick={claimTokens}
                  disabled={!canClaim}
                  className={`${styles.claimButton} ${!canClaim ? styles.claimButtonDisabled : ''}`}
                >
                  {canClaim ? 'Claim All Tokens' : 'Claim Cooldown Active'}
                </button>
              </div>
            </div>
          )}
        </div>

        {transactionStatus && (
          <div className={styles.transactionStatus}>
            <p className={`${styles.statusText} ${
              transactionStatus.includes("Successfully") 
                ? styles.successStatus 
                : transactionStatus.includes("Please") || transactionStatus.includes("You can claim again")
                ? styles.warningStatus
                : styles.infoStatus
            }`}>
              {transactionStatus}
            </p>
          </div>
        )}

        <div className={styles.footer}>
          <div className={styles.footerInfo}>
            <p className={styles.footerTitle}>🔒 Security Features:</p>
            <ul className={styles.securityList}>
              <li>✅ Immutable contracts - no admin controls</li>
              <li>✅ Fixed claim amounts set at deployment</li>
              <li>✅ SafeERC20 for all token operations</li>
              <li>✅ ReentrancyGuard protection</li>
              <li>✅ 24-hour cooldown between claims</li>
            </ul>
          </div>
          
          <div className={styles.contractInfo}>
            <p className={styles.contractLabel}>Faucet Contract:</p>
            <p className={styles.contractAddress}>
              {faucetContractAddress.slice(0, 6)}...{faucetContractAddress.slice(-4)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
