import React from "react";
import styled from "styled-components";

export default function BackgroundVideo({ src }) {
  return (
    <Container>
      <Overlay />
      <Video loop autoPlay muted playsInline>
        <source src={src} />
      </Video>
    </Container>
  );
}
// TODO: Credit Pexels video + Sort something out with the video on smaller/ unsupported devices

const Container = styled.div`
  position: absolute;
  height: calc(100vh - 120px);
  width: 100%;
  top: 120px;
  left: 0;
  overflow: hidden;
`;

const Video = styled.video`
  position: fixed;
  object-fit: cover;
  right: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -99999;
`;

const Overlay = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  z-index: -999;
`;
