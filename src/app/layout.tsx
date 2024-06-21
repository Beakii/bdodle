import "~/styles/globals.css";
import bdo from "../assets/png/bdoAssets/BlackSpiritIcon.png";

export const metadata = {
  title: "BDOdle",
  description: "Test your game knowledge with BDOdle! A new challenge every day!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex w-full items-center justify-center border-b pl-16 p-5 pb-10 text-5xl font-semibold bg-black">
      <div id="title" className="flex">
        <span>BD</span>
        <img src={bdo.src} className="h-11 w-11 m-1" />
        <span>dle</span>
      </div>
      <div className="eye blur-sm" id="leftEye"></div>
      <div className="eye blur-sm" id="rightEye"></div>
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
      <body className="flex flex-col gap-4 justify-center items-center min-w-full">
        <TopNav />
        {children}
      </body>
    </html >
  );
}
