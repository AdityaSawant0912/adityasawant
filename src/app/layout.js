
import "./globals.css";


export const metadata = {
  title: "Aditya Sawant",
  description: "This is me, Aditya Sawant.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
