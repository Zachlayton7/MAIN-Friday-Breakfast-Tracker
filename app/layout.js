export const metadata = {
  title: "MAIN Street Breakfast Rotation",
  description: "Discover MAIN Streets Friday Breakfast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
