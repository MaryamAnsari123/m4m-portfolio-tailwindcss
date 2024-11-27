
import "./globals.css";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <CustomNavbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
