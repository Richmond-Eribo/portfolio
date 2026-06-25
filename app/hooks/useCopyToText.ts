"use client";
import { useState, useCallback } from "react";

const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const copy = useCallback(async (text: string) => {
    setError(null);
    if (!text || typeof text !== "string") {
      setError("Please provide a valid text to copy");
      setCopiedText(null);
      return false;
    }

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      }

      setCopiedText(text);
      setError(null);
      return true;
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setError("Failed to copy text to clipboard");
      setCopiedText(null);
      return false;
    }
  }, []);

  return { copiedText, error, copy };
};

export default useCopyToClipboard;
