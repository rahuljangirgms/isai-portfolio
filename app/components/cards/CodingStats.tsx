// app/components/cards/CodingStats.tsx

"use client";  // Add this line to mark the component as a Client Component

import React, { useEffect, useState } from "react";
import { getCodingStats } from "@/app/lib/api/wakatime"; // Make sure this path is correct based on your folder structure

interface WakaTimeStats {
  data: {
    days: {
      date: string;
      total_seconds: number;
    }[];
  };
}

const CodingStats = () => {
  const [stats, setStats] = useState<WakaTimeStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getCodingStats();
        setStats(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch coding stats");
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>WakaTime Coding Stats for the Last 7 Days</h2>
      <ul>
        {stats?.data.days.map((day) => (
          <li key={day.date}>
            <strong>{day.date}:</strong> {day.total_seconds} seconds
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodingStats;
