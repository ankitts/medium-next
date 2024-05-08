import Topbar from "@/components/Topbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function BlogPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
