// import { env } from "../utils"
// import wretch from "wretch"

// // Instantiate and configure wretch
// const api = wretch("https://api.lanyard.rest", { cache: "no-store" })
//   .errorType("json")
//   .resolve((r) => r.json())

// // Fetch my discord activity
// export const getDiscordActivity = async () => {
//   return await api.get(`/v1/users/${env.DISCORD_ID}`)
// }

import { env } from "../utils"
import wretch from "wretch"

// Define the expected type for the Discord activity
interface DiscordActivity {
  data: {
    discord_user_id: string;
    discord_username: string;
    discord_avatar: string;
    activities: {
      name: string;
      type: number;
      details: string;
    }[];
  };
}

// Instantiate and configure wretch
const api = wretch("https://api.lanyard.rest", { cache: "no-store" })
  .errorType("json")
  .resolve((r: Response) => r.json() as Promise<DiscordActivity>) // Explicitly type the response

// Fetch my discord activity
export const getDiscordActivity = async () => {
  return await api.get(`/v1/users/${env.DISCORD_ID}`)
}
