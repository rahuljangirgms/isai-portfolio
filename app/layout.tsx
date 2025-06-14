// import type { Metadata } from "next";
// import { space_grotesk } from "@/app/lib/fonts";
// import "@/app/styles/globals.css";
// import { Footer } from "./components/layout/footer";
// import { Toaster } from "@/app/components/ui/toaster";
// import NavBar from "@/app/components/layout/navigation/nav-bar";

// export const metadata: Metadata = {
//   title: {
//     template: "%s | Isai's Portfolio",
//     default: "Isai's Portfolio",
//   },
//   description:
//     "A portfolio website for Isai Sanchez, a mechanical engineer and freelance software developer",
//   keywords: [
//     "mechanical engineer",
//     "software developer",
//     "CAD",
//     "robotics",
//     "Next.js",
//     "React",
//     "TailwindCSS",
//     "web development",
//     "portfolio",
//   ],
//   authors: [{ name: "Isai" }],
//   creator: "Isai",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://www.isais.dev",
//     siteName: "Isai's Portfolio",
//     title: "Isai - Engineer & Developer",
//     description: "A portfolio of experiences and projects",
//     images: [
//       {
//         url: "https://www.isais.dev/_next/image?url=%2Fassets%2Fmebw.JPG&w=3840&q=75",
//         width: 1200,
//         height: 630,
//         alt: "Black and White mirror film selfie",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Isai - Mechanical Engineer & Software Developer",
//     description: "An engineer's portfolio of experiences and projects",
//     images: [
//       "https://www.isais.dev/_next/image?url=%2Fassets%2Fmebw.JPG&w=3840&q=75",
//     ],
//   },
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${space_grotesk.className} antialiased bg-primary sm:custom-gradient custom-scrollbar flex flex-col min-h-screen`}
//       >
//         <main style={{ backgroundImage: `url('/assets/grainy-texture.png')` }}>
//           <NavBar />
//           {children}
//           <Footer />
//         </main>
//         <Toaster />
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { space_grotesk } from "@/app/lib/fonts";
import "@/app/styles/globals.css";
import { Footer } from "./components/layout/footer";
import { Toaster } from "@/app/components/ui/toaster";
import NavBar from "@/app/components/layout/navigation/nav-bar";
import { siteMetadata } from "@/app/components/pages/home/data/siteMetadata";
import { BgGradient } from "@/app/components/pages/home/BgGradient";
import { cn } from "./lib/utils";

import Script from "next/script";

// Metadata for the site
export const metadata: Metadata = {
  title: {
    template: "%s | Isai's Portfolio",
    default: "Isai's Portfolio",
  },
  description:
    "A portfolio website for Isai Sanchez, a mechanical engineer and freelance software developer",
  keywords: [
    "mechanical engineer",
    "software developer",
    "CAD",
    "robotics",
    "Next.js",
    "React",
    "TailwindCSS",
    "web development",
    "portfolio",
  ],
  authors: [{ name: "Isai" }],
  creator: "Isai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.isais.dev",
    siteName: "Isai's Portfolio",
    title: "Isai - Engineer & Developer",
    description: "A portfolio of experiences and projects",
    images: [
      {
        url: "https://www.isais.dev/_next/image?url=%2Fassets%2Fmebw.JPG&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "Black and White mirror film selfie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isai - Mechanical Engineer & Software Developer",
    description: "An engineer's portfolio of experiences and projects",
    images: [
      "https://www.isais.dev/_next/image?url=%2Fassets%2Fmebw.JPG&w=3840&q=75",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-bg-primary`}>
      <body
        className={`${space_grotesk.className} antialiased bg-primary sm:custom-gradient custom-scrollbar flex flex-col min-h-screen`}
      >
        <main
          style={{ backgroundImage: `url('/assets/grainy-texture.png')` }}
          className={cn(
            "relative flex flex-1 flex-col overflow-x-hidden border-x border-palette-3/50 mx-1 lg:mx-12"
          )}
        >
          <NavBar />
          <div className="grid flex-1 grid-cols-1 lg:grid-cols-[32px_1fr_32px]">
            {/* Left Border */}
            <div className="hidden w-full border-r border-palette-3 opacity-75 lg:block"
              style={{
                backgroundImage: "linear-gradient(45deg, #F6F1E9 12.50%, transparent 12.50%, transparent 50%, #F6F1E9 50%, #F6F1E9 62.50%, transparent 62.50%, transparent 100%)",
                backgroundSize: "5px 5px"
              }}>
            </div>

            {/* Main Content */}
            <div className="relative col-span-1 px-3 lg:px-0">
              <BgGradient />
              {children}
            </div>

            {/* Right Border */}
            <div className="hidden w-full border-l border-palette-3 opacity-75 lg:block"
              style={{
                backgroundImage: "linear-gradient(45deg, #F6F1E9 12.50%, transparent 12.50%, transparent 50%, #F6F1E9 50%, #F6F1E9 62.50%, transparent 62.50%, transparent 100%)",
                backgroundSize: "5px 5px"
              }}>
            </div>
          </div>

          <Footer />
        </main>
        <Toaster />
      </body>

      {/* Vemetric Script */}
      <Script id="vemetric-loader" strategy="afterInteractive">
        {`
          window.vmtrcq = window.vmtrcq || [];
          window.vmtrc = window.vmtrc || ((...args) => window.vmtrcq.push(args));
        `}
      </Script>

      <Script
        src="https://cdn.vemetric.com/main.js"
        data-token="HUO9AbX53v2wkzRu"
        strategy="afterInteractive"
      />
    </html>
  );
}
