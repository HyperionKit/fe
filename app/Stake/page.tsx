"use client"

import { useState } from "react"
import { Wallet, Coins, DollarSign } from "lucide-react"
import styles from "./stake.module.css"

export default function StakingPage() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [metisBalance, setMetisBalance] = useState(0)
  const [wmetisBalance, setWmetisBalance] = useState(0)
  const [usdtBalance, setUsdtBalance] = useState(0)
  const [stakedMetis, setStakedMetis] = useState(0)
  const [stakedUsdt, setStakedUsdt] = useState(0)
  const [metisStakeAmount, setMetisStakeAmount] = useState("")
  const [usdtStakeAmount, setUsdtStakeAmount] = useState("")

  // Placeholder for Web3 wallet connection
  const connectWallet = () => {
    // In a real application, this would trigger a Web3 wallet connection (e.g., MetaMask)
    // and fetch balances.
    console.log("Connecting wallet...")
    setWalletConnected(true)
    // Simulate fetching balances
    setMetisBalance(150.75)
    setWmetisBalance(50.2)
    setUsdtBalance(1234.56)
    setStakedMetis(25.0)
    setStakedUsdt(100.0)
  }

  const handleMetisStake = () => {
    const amount = Number.parseFloat(metisStakeAmount)
    if (isNaN(amount) || amount <= 0) return
    // Placeholder for actual staking logic (smart contract interaction)
    console.log(`Staking ${amount} METIS/WMETIS`)
    setStakedMetis((prev) => prev + amount)
    setMetisBalance((prev) => prev - amount)
    setMetisStakeAmount("")
  }

  const handleMetisUnstake = () => {
    const amount = Number.parseFloat(metisStakeAmount)
    if (isNaN(amount) || amount <= 0) return
    // Placeholder for actual unstaking logic (smart contract interaction)
    console.log(`Unstaking ${amount} METIS/WMETIS`)
    setStakedMetis((prev) => prev - amount)
    setMetisBalance((prev) => prev + amount)
    setMetisStakeAmount("")
  }

  const handleUsdtStake = () => {
    const amount = Number.parseFloat(usdtStakeAmount)
    if (isNaN(amount) || amount <= 0) return
    // Placeholder for actual staking logic (smart contract interaction)
    console.log(`Staking ${amount} USDT`)
    setStakedUsdt((prev) => prev + amount)
    setUsdtBalance((prev) => prev - amount)
    setUsdtStakeAmount("")
  }

  const handleUsdtUnstake = () => {
    const amount = Number.parseFloat(usdtStakeAmount)
    if (isNaN(amount) || amount <= 0) return
    // Placeholder for actual unstaking logic (smart contract interaction)
    console.log(`Unstaking ${amount} USDT`)
    setStakedUsdt((prev) => prev - amount)
    setUsdtBalance((prev) => prev + amount)
    setUsdtStakeAmount("")
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Staking Platform</h1>
        {!walletConnected ? (
          <button onClick={connectWallet} className={`${styles.button} ${styles.primaryButton}`}>
            <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
          </button>
        ) : (
          <div className={styles.walletStatus}>
            <span className={styles.walletStatusText}>Wallet Connected</span>
            <div className={styles.walletStatusIndicator} />
          </div>
        )}
      </header>

      <main className={styles.mainGrid}>
        {/* METIS/WMETIS Staking Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>
              <Coins className="mr-2 h-6 w-6" /> METIS / WMETIS Staking
            </h2>
            <p className={styles.cardDescription}>Stake your METIS or WMETIS tokens to earn rewards.</p>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.balanceGrid}>
              <div>
                <p className={styles.balanceLabel}>Your METIS Balance</p>
                <p className={styles.balanceValue}>{metisBalance.toFixed(2)} METIS</p>
              </div>
              <div>
                <p className={styles.balanceLabel}>Your WMETIS Balance</p>
                <p className={styles.balanceValue}>{wmetisBalance.toFixed(2)} WMETIS</p>
              </div>
            </div>
            <div>
              <p className={styles.stakedAmount}>Currently Staked</p>
              <p className={styles.stakedValue}>{stakedMetis.toFixed(2)} METIS</p>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="metis-amount" className={styles.inputLabel}>
                Amount to Stake/Unstake
              </label>
              <input
                id="metis-amount"
                type="number"
                placeholder="0.00"
                value={metisStakeAmount}
                onChange={(e) => setMetisStakeAmount(e.target.value)}
                className={styles.inputField}
                disabled={!walletConnected}
              />
            </div>
            <div className={styles.buttonGroup}>
              <button
                onClick={handleMetisStake}
                className={`${styles.button} ${styles.primaryButton}`}
                disabled={
                  !walletConnected ||
                  Number.parseFloat(metisStakeAmount) <= 0 ||
                  Number.parseFloat(metisStakeAmount) > metisBalance + wmetisBalance
                }
              >
                Stake
              </button>
              <button
                onClick={handleMetisUnstake}
                className={`${styles.button} ${styles.outlineButton}`}
                disabled={
                  !walletConnected ||
                  Number.parseFloat(metisStakeAmount) <= 0 ||
                  Number.parseFloat(metisStakeAmount) > stakedMetis
                }
              >
                Unstake
              </button>
            </div>
            <div className={styles.infoText}>
              <p>Estimated APY: 12.5%</p>
              <p>Your Rewards: 0.00 METIS</p>
            </div>
          </div>
        </div>

        {/* USDT Staking Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>
              <DollarSign className="mr-2 h-6 w-6" /> USDT Staking
            </h2>
            <p className={styles.cardDescription}>Stake your USDT tokens to earn stable rewards.</p>
          </div>
          <div className={styles.cardContent}>
            <div>
              <p className={styles.balanceLabel}>Your USDT Balance</p>
              <p className={styles.balanceValue}>{usdtBalance.toFixed(2)} USDT</p>
            </div>
            <div>
              <p className={styles.stakedAmount}>Currently Staked</p>
              <p className={styles.stakedValue}>{stakedUsdt.toFixed(2)} USDT</p>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="usdt-amount" className={styles.inputLabel}>
                Amount to Stake/Unstake
              </label>
              <input
                id="usdt-amount"
                type="number"
                placeholder="0.00"
                value={usdtStakeAmount}
                onChange={(e) => setUsdtStakeAmount(e.target.value)}
                className={styles.inputField}
                disabled={!walletConnected}
              />
            </div>
            <div className={styles.buttonGroup}>
              <button
                onClick={handleUsdtStake}
                className={`${styles.button} ${styles.primaryButton}`}
                disabled={
                  !walletConnected ||
                  Number.parseFloat(usdtStakeAmount) <= 0 ||
                  Number.parseFloat(usdtStakeAmount) > usdtBalance
                }
              >
                Stake
              </button>
              <button
                onClick={handleUsdtUnstake}
                className={`${styles.button} ${styles.outlineButton}`}
                disabled={
                  !walletConnected ||
                  Number.parseFloat(usdtStakeAmount) <= 0 ||
                  Number.parseFloat(usdtStakeAmount) > stakedUsdt
                }
              >
                Unstake
              </button>
            </div>
            <div className={styles.infoText}>
              <p>Estimated APY: 8.0%</p>
              <p>Your Rewards: 0.00 USDT</p>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Staking Platform. All rights reserved.</p>
        <p>Powered by Web3 technologies.</p>
      </footer>
    </div>
  )
}
