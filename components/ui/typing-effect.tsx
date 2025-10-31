'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
}

export function TypingEffect({
  text,
  speed = 100,
  deleteSpeed = 50,
  delay = 2000,
  className = '',
  showCursor = true
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const delayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clean up any existing timeouts
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (delayTimeoutRef.current) clearTimeout(delayTimeoutRef.current);

    const currentSpeed = isDeleting ? deleteSpeed : speed;

    if (!isDeleting) {
      // Typing in
      if (displayedText.length < text.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(text.substring(0, displayedText.length + 1));
        }, currentSpeed);
      } else {
        // Finished typing, wait before deleting
        delayTimeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    } else {
      // Deleting
      if (displayedText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(text.substring(0, displayedText.length - 1));
        }, currentSpeed);
      } else {
        // Finished deleting, restart typing
        setIsDeleting(false);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (delayTimeoutRef.current) clearTimeout(delayTimeoutRef.current);
    };
  }, [displayedText, isDeleting, text, speed, deleteSpeed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span className="animate-pulse text-white ml-1 inline-block w-0.5">|</span>
      )}
    </span>
  );
}

