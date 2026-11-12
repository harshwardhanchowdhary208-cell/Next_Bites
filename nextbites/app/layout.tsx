// app/layout.tsx
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: '20px', borderBottom: '1px solid #eaeaea', marginBottom: '32px' }}>
          <h2 style={{ margin: 0 }}>NextBites 🍳</h2>
        </nav>
        {children}
      </body>
    </html>
  );
}
export const metadata = {
  title: "NextBites · Quick recipes",
  description: "A tiny recipe app built with Next.js.",
};