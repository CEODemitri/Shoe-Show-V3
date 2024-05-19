import "./globals.css";
import NavBar from "./components/NavBar";
import "@fontsource/rammetto-one";

export const metadata = {
  title: "Shoe Show",
  description: "Heater Portal: the best soles around",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
