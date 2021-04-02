import NavLink from "../../NavLink";
import Header from "../../Header";
import { Home, Spa, Star, ContactSupport } from "@material-ui/icons/";
import { Alert } from "@material-ui/lab/";
import styled from "styled-components";

export default function Layout({ children, warning }) {
  return (
    <div>
      <Header />
      {warning && (
        <UnderConstruction severity="warning" boxShadow={1}>
          Site in Development! {warning} are currently placeholders only.
        </UnderConstruction>
      )}
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

const UnderConstruction = styled(Alert)`
  justify-content: center;
  &&& {
    box-shadow: 0px .5px 2px .5px rgba(0, 0, 0, .3);
    position: sticky;
    top: 0;
    z-index: 9999999;
  }
`;

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
