import { BottomNavigation } from "@/components/layouts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BottomNavigation />
        {children}
      </body>
    </html>
  );
}
