import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata = {
  title: "RouteX - Immigratsiya va Viza",
  description: "RouteX - Eng yaxshi immigratsiya va viza xizmatlari. Biz sizga tez va ishonchli viza olishda yordam beramiz.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" webcrx="none">
      <body>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
