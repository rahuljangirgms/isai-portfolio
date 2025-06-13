// import { env } from "@/env.mjs"
// import wretch from "wretch"

// const apiUrl = env.GH_API_URL

// // Instantiate and configure wretch
// const api = wretch(apiUrl, {
//   cache: "no-store",
//   mode: "cors",
// })
//   .errorType("json")
//   .resolve((r) => r.json())

// // Fetch my pinned repository
// export const getRepo = async () => {
//   return await api.get("")
// }


import { env } from "@/env.mjs"
import wretch from "wretch"

// Define the expected type for the repository data
interface Repo {
  id: number;
  name: string;
  description: string | null;
  url: string;
}

const apiUrl = env.GH_API_URL

// Instantiate and configure wretch
const api = wretch(apiUrl, {
  cache: "no-store",
  mode: "cors",
})
  .errorType("json")
  .resolve((r: Response) => r.json() as Promise<Repo[]>) // Explicitly type the response

// Fetch my pinned repository
export const getRepo = async () => {
  return await api.get("")
}
