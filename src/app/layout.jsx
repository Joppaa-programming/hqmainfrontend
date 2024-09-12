import { Inter,Open_Sans } from "next/font/google";
import "./globals.css";
import Content from "./components/content";
import { AppProvider } from "./context.js/appContext";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: "H.Q Restaurant",
  description: "Home of Nigerian cuisines. Website by Originally.Black",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <AppProvider>
      <body className={inter.className}><Content>{children}</Content></body></AppProvider>
    </html>
  );
}
