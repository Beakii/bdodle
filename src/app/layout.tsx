import "~/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Footer from "./_components/footer";
import { TopNav } from "./_components/topNav";
import AuthProvider from "./context/AuthProvider";


export const metadata = {
  title: "BDOdle",
  description: "Test your game knowledge with BDOdle! A new challenge daily",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="min-h-[100vh] flex flex-col justify-between">
            <TopNav />
            {children}
            <Footer />
            <SpeedInsights />
            <Analytics />
          </div>
        </AuthProvider>
      </body>
    </html >
  );
}
