import "./globals.css";
import RouteWarmup from "@/components/RouteWarmup";

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
      <body className="min-h-screen bg-neutral-950 text-white">
        <RouteWarmup />
        {children}
      </body>
    </html>
  );
}
