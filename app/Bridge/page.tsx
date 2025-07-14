"use client"

import type React from "react"

import { useState } from "react"
import styles from "./bridge.module.css"

export default function BridgePage() {
  const [fromChain, setFromChain] = useState("ethereum")
  const [toChain, setToChain] = useState("polygon")
  const [amount, setAmount] = useState("")
  const [recipientAddress, setRecipientAddress] = useState("")
  const [walletConnected, setWalletConnected] = useState(false)
  const [transactionStatus, setTransactionStatus] = useState("")

  const handleConnectWallet = async () => {
    setTransactionStatus("Connecting wallet...")
    // Simulate wallet connection
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setWalletConnected(true)
    setTransactionStatus("Wallet connected!")
  }

  const handleBridge = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!walletConnected) {
      setTransactionStatus("Please connect your wallet first.")
      return
    }
    if (!amount || Number.parseFloat(amount) <= 0) {
      setTransactionStatus("Please enter a valid amount.")
      return
    }
    if (!recipientAddress) {
      setTransactionStatus("Please enter a recipient address.")
      return
    }

    setTransactionStatus("Initiating bridge transaction...")
    // Simulate bridge transaction
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setTransactionStatus(`Transaction successful! Bridged ${amount} from ${fromChain} to ${toChain}.`)
    // Reset form fields
    setAmount("")
    setRecipientAddress("")
  }

  return (
    <div className={styles.main_viewport}>
      <h1 className={styles.module_title}>Hyperion Bridge</h1>
      <div className={styles.data_block}>
        {!walletConnected ? (
          <button onClick={handleConnectWallet} className={styles.btn_primary}>
            Connect Wallet
          </button>
        ) : (
          <p className={styles.conn_state}>Wallet Connected!</p>
        )}

        <form onSubmit={handleBridge} className={styles.action_form}>
          <div className={styles.input_unit}>
            <label htmlFor="from-chain" className={styles.lbl_field}>
              From Chain
            </label>
            <select
              id="from-chain"
              value={fromChain}
              onChange={(e) => setFromChain(e.target.value)}
              className={styles.sel_field}
            >
              <option value="ethereum">Ethereum</option>
              <option value="polygon">Polygon</option>
              <option value="binance-smart-chain">Binance Smart Chain</option>
              <option value="arbitrum">Arbitrum</option>
            </select>
          </div>

          <div className={styles.input_unit}>
            <label htmlFor="to-chain" className={styles.lbl_field}>
              To Chain
            </label>
            <select
              id="to-chain"
              value={toChain}
              onChange={(e) => setToChain(e.target.value)}
              className={styles.sel_field}
            >
              <option value="polygon">Polygon</option>
              <option value="ethereum">Ethereum</option>
              <option value="arbitrum">Arbitrum</option>
              <option value="optimism">Optimism</option>
            </select>
          </div>

          <div className={styles.input_unit}>
            <label htmlFor="amount" className={styles.lbl_field}>
              Amount
            </label>
            <input
              id="amount"
              type="number"
              placeholder="0.0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              step="0.0001"
              min="0"
              className={styles.txt_field}
            />
          </div>

          <div className={styles.input_unit}>
            <label htmlFor="recipient-address" className={styles.lbl_field}>
              Recipient Address
            </label>
            <input
              id="recipient-address"
              type="text"
              placeholder="0x..."
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
              className={styles.txt_field}
            />
          </div>

          <button type="submit" className={styles.btn_primary} disabled={!walletConnected}>
            Bridge
          </button>
        </form>

        {transactionStatus && (
          <p
            className={`${styles.op_status} ${transactionStatus.includes("successful") ? styles.alert_positive : styles.alert_neutral}`}
          >
            {transactionStatus}
          </p>
        )}
      </div>
    </div>
  )
}
