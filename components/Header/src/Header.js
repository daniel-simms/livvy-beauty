import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Background>
      <Container>
        <Link href="/">
          <Logo
            priority
            src="/images/livvy-logo.png"
            layout="fill"
            alt="Logo for Livvy Beauty"
            style={{
              margin: "auto",
            }}
          />
        </Link>
      </Container>
    </Background>
  );
}

const Logo = styled(Image)`
  &&& {
    cursor: pointer;
    z-index: 9999;
  }

`

const Background = styled.div`
  background-color: #080708;
  width: 100vw;
  height: 120px;
  display: grid;
  place-items: center;
  border-bottom: 1px solid black;
`;

const Container = styled.div`
  position: relative;
  width: 150px;
  height: calc(150px / 1.795);
  margin: 0 auto;
`;
