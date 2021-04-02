import Head from "next/head";
import NavLink from "../../NavLink";
import Header from "../../Header";
import { Home, Spa, Star, ContactSupport } from "@material-ui/icons/";
import styled from "styled-components";

export const siteTitle = "Livvy Beauty";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Olivia Callaghan - North London based beautician."
          key="description"
        />
        <meta
          property="og:image"
          content="/images/livvy-logo-icon.png"
          key="image"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <meta name="application-name" content="Livvy Beauty" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Livvy Beauty" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* <meta
          name="msapplication-config"
          content="icons/browserconfig.xml"
        /> */}
        <meta name="msapplication-TileColor" content="#c83aa8" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#c83aa8" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="icons/icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="icons/icon-72x72.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="icons/icon-72x72.png"
        />
        <link rel="manifest" href="/static/manifest.json" />
        <link rel="mask-icon" href="icons/icon-72x72.png" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://livvy.beauty" />
        <meta name="twitter:title" content="Livvy Beauty" />
        <meta
          name="twitter:description"
          content="Olivia Callaghan - North London based beautician."
        />
        <meta
          name="twitter:image"
          content="https://livvy.beautyicons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@DanielMarcSimms" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Livvy Beauty" />
        <meta
          property="og:description"
          content="Olivia Callaghan - North London based beautician."
        />
        <meta property="og:site_name" content="Livvy Beauty" />
        <meta property="og:url" content="https://livvy.beauty" />
      </Head>
      <Header />
      <Content>{children}</Content>
      <Nav>
        <NavLink href="/" label="Home" icon={Home} />
        <NavLink href="/treatments" label="Treatments" icon={Spa} />
        <NavLink href="/reviews" label="Reviews" icon={Star} />
        {/* <NavLink href="/gallery" label="Gallery" icon={Photo} /> */}
        <NavLink href="/contact" label="Contact" icon={ContactSupport} />
      </Nav>
    </div>
  );
}

const Content = styled.main`
  padding: 1rem;
`;
const Nav = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  color: white;
  padding: 8px 0 5px 0;
  border-top: 1px solid black;

  &&& {
    justify-content: space-evenly;
    background-color: #080708;
  }
`;
