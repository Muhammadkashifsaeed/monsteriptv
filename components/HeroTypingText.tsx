"use client";

import React, { useState, useEffect } from 'react';

const typingWords = ["ALLA SPORT", "ALLA SERIER", "ALLA FILMER", "ALLA KANALER"];

export default function HeroTypingText() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return typingWords[0];
    }
    return "";
  });
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const currentWord = typingWords[currentWordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
        }
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText.length === currentWord.length) {
          timeout = setTimeout(() => setIsDeleting(true), 1500);
        }
      }, 100);
    }
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <>
      SE & STREAMA MED<br/>MONSTER TV<br/>
      <span className="inline-block text-white min-h-[1.2em]">
        {currentText}<span className="inline-block animate-pulse motion-reduce:animate-none">|</span>
      </span>
    </>
  );
}
