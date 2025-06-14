// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"
// import { env } from "@/env.mjs"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

// export function absoluteUrl(path: string) {
//   return `${env.NEXT_PUBLIC_APP_URL}${path}`
// }

// export { env }



import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { env } from "@/env.mjs";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";

// Helper functions for class management
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



// Absolute URL helper function
export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}

// Date formatting function
export const formatDate = (date: string) => {
  noStore();
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} (${formattedDate})`;
};

// Time of day greeting function
export const getTimeOfDayGreeting = () => {
  const now = new Date();
  const hours = now.getHours();

  if (hours < 12) {
    return "Good morning!";
  } else if (hours < 17) {
    return "Good afternoon!";
  } else {
    return "Good evening!";
  }
};






// Export environment variables
export { env };
