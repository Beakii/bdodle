import "~/styles/globals.css";
import bdo from "../assets/png/bdoAssets/BlackSpiritIcon.png";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "BDOdle",
  description: "Test your game knowledge with BDOdle! A new challenge every day!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex flex-col w-full items-center border-b p-5 text-5xl font-semibold bg-black">
      <div id="title" className="flex">
        <span>BD</span>
        <img src={bdo.src} className="size-11 m-1" />
        <span>dle</span>
      </div>
      <div className="flex gap-20 pt-3">
        <div className="bg-[#E30D03] size-7 rounded-full blur-sm"></div>
        <div className="bg-[#E30D03] size-7 rounded-full blur-sm"></div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-w-full ">
        <TopNav />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html >
  );
}
