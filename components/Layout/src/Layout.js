import { useState } from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import NavLink from "../../NavLink";
import Header from "../../Header";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, Spa, Star, Photo, ContactSupport } from "@material-ui/icons/";
import styled from "styled-components";

const name = "Olivia Callaghan";
export const siteTitle = "Livvy.beauty";

export default function Layout({ children, home }) {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon-32x32.png" />
        <meta
          name="description"
          content="Olivia Callaghan - North London based beautician."
        />
        <meta
          property="og:image"
          content='/images/livvy-logo-icon.png'
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
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
`
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
