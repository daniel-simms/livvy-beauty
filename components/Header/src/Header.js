import Image from "next/image";
import React from "react";
import styles from "./header.module.css";
import styled from "styled-components";

export default function Header() {
  return (
    <Background>
      <Container>
      <Image
          priority
          src="/images/livvy-logo.png"
          layout="fill"
          alt="Logo for Livvy Beauty"
          style={{
            margin: "auto",
          }}
        />
      </Container>
    </Background>
  );
}

const Background = styled.div`
  background-color: black;
  width: 100vw;
  height: 120px;
`;

const Container = styled.div`
  position: relative;
  width: 200px;
  height: calc(200px / 1.795);
  margin: 0 auto 20px auto;
`;
