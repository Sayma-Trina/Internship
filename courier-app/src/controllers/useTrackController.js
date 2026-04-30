import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE;

export const useTrackController = () => {
  const [tracknumber, setTracknumber] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTrack = async () => {
    const normalizedTrackNumber = tracknumber.trim();
    if (!normalizedTrackNumber) {
      setError("Please enter a tracking number");
      return;
    }

    if (!API_BASE) {
      setError("API base URL not configured. Check your .env file.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setTrackingResult(null);

    try {
      const url = `${API_BASE}/Order/${encodeURIComponent(normalizedTrackNumber)}`;
      console.log("Fetching URL:", url);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Tracking number not found");
        }
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setTrackingResult(data);
    } catch (err) {
      console.error("Tracking error:", err);
      setError(err.message || "Failed to fetch tracking info. Check network and server.");
      setTrackingResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setTracknumber(e.target.value);
    if (error) setError(null);
  };

  return {
    tracknumber,
    handleChange,
    handleTrack,
    trackingResult,
    isLoading,
    error,
  };
};