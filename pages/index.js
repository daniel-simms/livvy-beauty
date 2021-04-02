import Head from "next/head";
import Link from "next/link";

import { LocationOn } from "@material-ui/icons";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";

import Layout, { siteTitle } from "../components/Layout";
import BackgroundVideo from "../components/BackgroundVideo";

export async function getStaticProps() {
  return {
    props: {
      video: "/videos/nails.mp4",
    },
  };
}

export default function Home({ video }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <BackgroundVideo src={video} />

      <VirticalCenter>
        <Container>
          <Title variant="h2" component="h1">Beautician</Title>
          <Location variant="h4" component="h2">
            <Icon fontSize="large" /> North London
          </Location>
          <Link href="/treatments">
            <CTA variant="outlined">Get Pampered 💅🏻</CTA>
          </Link>
        </Container>
      </VirticalCenter>

    </Layout>
  );
}

const VirticalCenter = styled.section`
  display: grid;
  place-items: center;
  height: 70vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled(Typography)`
  color: #c83aa8;
  margin: 0;
`;

const Location = styled(Typography)`
  color: white;
  margin: 0;
  &&& {
    margin-left: -5px;
  }
`;

const CTA = styled(Button)`
  &&& {
    text-transform: capitalize;
    color: #c83aa8;
    border: 1px solid #c83aa8;
    margin: 2rem 0;
  }
`;

const Icon = styled(LocationOn)`
  position: relative;
  top: 4px;
  left: 2px;
`;
