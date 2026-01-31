import "./globals.css";

export const metadata = {
  title: "Illustrated Concepts | NCERT Science",
  description: "Interactive science illustrations for NCERT students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
