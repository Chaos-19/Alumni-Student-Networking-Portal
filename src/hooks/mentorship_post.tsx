// src/hooks/useUploadHistory.ts

import { useState, useEffect } from "react";

interface UploadHistoryItem {
  name: string;
  first_name: string;
  skill: string;
  created_at: string;
}

interface UploadHistoryResponse {
  data: UploadHistoryItem[];
  ok: boolean;
}

const useUploadHistory = () => {
  const [uploadHistory, setUploadHistory] = useState<UploadHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUploadHistory = async () => {
      try {
        const response = await fetch("http://localhost:8081/v1/mentorships", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }

        const result: UploadHistoryResponse = await response.json();
        if (result.ok) {
          setUploadHistory(result.data);
        } else {
          throw new Error("Response was not OK");
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchUploadHistory();
  }, []);

  return { uploadHistory, loading, error };
};

export default useUploadHistory;
