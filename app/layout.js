import "./global.css";

export const metadata = {
  title: "Use Reducer Bank",
  description: "Use Reducer Bank",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
