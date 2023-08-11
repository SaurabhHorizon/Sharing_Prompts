import "@styles/global.css";
import "@styles/gobal.scss";
// import { Children } from 'react'
import Nav from "@components/Nav";
import Provder from "@components/Provider";
export const metadata = {
  title: "Promtopia",
  icone: "/assets/images/logo.svg",
  description: "Describe & share AI promts",
  favicon: "/assets/images/favicon.ico",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Provder>
        <body>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </body>
      </Provder>
    </html>
  );
};

export default RootLayout;
