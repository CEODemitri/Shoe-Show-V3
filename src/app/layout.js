import "./globals.css";
import NavBar from "./components/NavBar";
// Supports weights 400-700
import '@fontsource-variable/afacad';
// Supports weights 400-900
import '@fontsource-variable/golos-text';

export const metadata = {
  title: "Shoe Show",
  description: "Heater Portal: the best soles around",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#E5E7EB] overflow-hidden">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
