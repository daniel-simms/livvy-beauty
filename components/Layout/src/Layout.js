import Head from "next/head";
import NavLink from "../../NavLink";
import Header from "../../Header";
import { Home, Spa, Star, ContactSupport } from "@material-ui/icons/";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <div>
      <Head>

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
