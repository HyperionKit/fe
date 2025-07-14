"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowDownUp, ChevronDown, Wallet } from "lucide-react"

import styles from "./swap.module.css" // Import the CSS module

export default function SwapPage() {
  const [fromAmount, setFromAmount] = useState("0.0")
  const [toAmount, setToAmount] = useState("0.0")
  const [fromToken, setFromToken] = useState("ETH")
  const [toToken, setToToken] = useState("USDC")
  const [isConnected, setIsConnected] = useState(false) 

  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState(false)
  const [isToDropdownOpen, setIsToDropdownOpen] = useState(false)

  const fromDropdownRef = useRef<HTMLDivElement>(null)
  const toDropdownRef = useRef<HTMLDivElement>(null)

  const tokens = ["ETH", "USDC", "METIS", "WMETIS"]

  const handleSwapDirection = () => {
    setFromToken(toToken)
    setToToken(fromToken)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  const connectWallet = () => {
    console.log("Connecting wallet...")
    setIsConnected(true)
  }

  const handleSwap = () => {
    if (!isConnected) {
      alert("Please connect your wallet first.")
      return
    }
    console.log(`Swapping ${fromAmount} ${fromToken} for ${toAmount} ${toToken}`)
    alert(`Swap initiated: ${fromAmount} ${fromToken} to ${toToken} ${toToken}`)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fromDropdownRef.current && !fromDropdownRef.current.contains(event.target as Node)) {
        setIsFromDropdownOpen(false)
      }
      if (toDropdownRef.current && !toDropdownRef.current.contains(event.target as Node)) {
        setIsToDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h1 className={styles.cardTitle}>Crypto Swap</h1>
          <p className={styles.cardDescription}>Exchange your tokens instantly and securely.</p>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.inputGroup}>
            <label htmlFor="from-amount" className={styles.label}>
              You pay
            </label>
            <div className={styles.inputWrapper}>
              <input
                id="from-amount"
                type="number"
                placeholder="0.0"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className={styles.inputField}
              />
              <div className={styles.dropdownMenu} ref={fromDropdownRef}>
                <button
                  type="button"
                  className={styles.tokenButton}
                  onClick={() => setIsFromDropdownOpen(!isFromDropdownOpen)}
                >
                  {fromToken} <ChevronDown className="h-4 w-4" />
                </button>
                {isFromDropdownOpen && (
                  <div className={styles.dropdownContent}>
                    {tokens.map((token) => (
                      <div
                        key={token}
                        className={styles.dropdownItem}
                        onClick={() => {
                          setFromToken(token)
                          setIsFromDropdownOpen(false)
                        }}
                      >
                        {token}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.swapButtonContainer}>
            <button
              type="button"
              onClick={handleSwapDirection}
              className={styles.swapDirectionButton}
              aria-label="Reverse swap direction"
            >
              <ArrowDownUp className="h-5 w-5" />
            </button>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="to-amount" className={styles.label}>
              You receive
            </label>
            <div className={styles.inputWrapper}>
              <input
                id="to-amount"
                type="number"
                placeholder="0.0"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className={styles.inputField}
              />
              <div className={styles.dropdownMenu} ref={toDropdownRef}>
                <button
                  type="button"
                  className={styles.tokenButton}
                  onClick={() => setIsToDropdownOpen(!isToDropdownOpen)}
                >
                  {toToken} <ChevronDown className="h-4 w-4" />
                </button>
                {isToDropdownOpen && (
                  <div className={styles.dropdownContent}>
                    {tokens.map((token) => (
                      <div
                        key={token}
                        className={styles.dropdownItem}
                        onClick={() => {
                          setToToken(token)
                          setIsToDropdownOpen(false)
                        }}
                      >
                        {token}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardFooter}>
          {!isConnected ? (
            <button type="button" onClick={connectWallet} className={styles.actionButton}>
              <Wallet className="h-5 w-5" /> Connect Wallet
            </button>
          ) : (
            <button type="button" onClick={handleSwap} className={styles.actionButton}>
              Swap
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
