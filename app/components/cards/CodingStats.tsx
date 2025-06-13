"use client"; // Mark this as a Client Component

import React, { useEffect, useState } from "react";

// Define the structure of WakaTimeStats based on the provided data
interface WakaTimeStats {
  data: {
    username: string;
    total_seconds: number;
    daily_average_including_other_language: number;
    human_readable_daily_average_including_other_language: string;
    categories: {
      name: string;
      total_seconds: number;
      text: string;
    }[];
    languages: {
      name: string;
      total_seconds: number;
      text: string;
    }[];
    editors: {
      name: string;
      total_seconds: number;
      text: string;
    }[];
    operating_systems: {
      name: string;
      total_seconds: number;
      text: string;
    }[];
    human_readable_total: string;
    human_readable_range: string;
  };
}

const CodingStats = () => {
  const [stats, setStats] = useState<WakaTimeStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/wakatime'); // Call the server-side API route
        if (!res.ok) {
          // If the response is not OK, throw an error
          throw new Error(`Failed to fetch coding stats: ${res.statusText}`);
        }
        const data: WakaTimeStats = await res.json(); // Type the response as WakaTimeStats
        setStats(data);
        setLoading(false);
      } catch (err: any) {
        console.error("Error fetching stats:", err);  // Log the full error
        setError("Failed to fetch coding stats"); // Set a user-friendly error message
        setLoading(false);
      }
    };

    fetchStats(); // Fetch stats when the component mounts
  }, []); // Only run once on mount

  if (loading) return <p>Loading...</p>; // Show loading text while fetching
  if (error) return <p>{error}</p>; // Show error message if the request failed

  return (
    <div>
      <h2>{stats?.data.username}'s WakaTime Coding Stats</h2>
      <p>Total coding time for the last 7 days: {stats?.data.human_readable_total}</p>
      <p>Daily Average (including other languages): {stats?.data.human_readable_daily_average_including_other_language}</p>
      <p>Range: {stats?.data.human_readable_range}</p>

      <h3>Categories</h3>
      <ul>
        {stats?.data.categories.map((category) => (
          <li key={category.name}>
            <strong>{category.name}:</strong> {category.text}
          </li>
        ))}
      </ul>

      <h3>Languages</h3>
      <ul>
        {stats?.data.languages.map((language) => (
          <li key={language.name}>
            <strong>{language.name}:</strong> {language.text}
          </li>
        ))}
      </ul>

      <h3>Editors</h3>
      <ul>
        {stats?.data.editors.map((editor) => (
          <li key={editor.name}>
            <strong>{editor.name}:</strong> {editor.text}
          </li>
        ))}
      </ul>

      <h3>Operating Systems</h3>
      <ul>
        {stats?.data.operating_systems.map((os) => (
          <li key={os.name}>
            <strong>{os.name}:</strong> {os.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodingStats;
