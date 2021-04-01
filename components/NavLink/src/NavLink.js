import Link from "next/link";
import styled from "styled-components";

export default function NavLink({ href, label, icon: Icon }) {
  return (
    <Link href={href}>
      <Container>
        <Icon />
        <Label>{label}</Label>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Label = styled.span`
  font-size: 0.8rem;
`;
