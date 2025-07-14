"use client"

import { Wallet } from "lucide-react"
import styles from "./connect.module.css"

export default function ConnectWalletPage() {
  const handleConnectWallet = () => {
    console.log("Connecting to Web3 wallet...")
  }

  return (
    <div className={styles.pageContainer}>
      <button
        className={styles.connectButton}
        onClick={handleConnectWallet}
      >
        <Wallet />
        Connect
      </button>
    </div>
  )
}
