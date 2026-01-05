import { Roboto_Mono } from "next/font/google";

const robotoMono = {
  variable: "--font-roboto-mono",
  subsets: ["latin"],
};

export const metadata = {
  title: "Use Reducer Bank",
  description: "Use Reducer Bank",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable}}`}>{children}</body>
    </html>
  );
}
