import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Holiday Party Invitation",
  description:
    "A holiday party invitation with RSVP details for Snow Bar, December 25, 2035, from 6:00 PM to 11:00 PM.",
  openGraph: {
    title: "Holiday Party Invitation",
    description: "You're invited to celebrate the holidays at Snow Bar.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
