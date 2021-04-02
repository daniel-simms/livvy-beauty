import Head from "next/head";
import Link from "next/link";

import { LocationOn } from "@material-ui/icons";
import { Button } from "@material-ui/core";
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

      <section>
        <div>
          <h1>
            Beautician
            <small>
              <Icon fontSize="large" /> North London
            </small>
          </h1>
          <Link href="/treatments">
            <CTA variant="outlined">Get Pampered 💅🏻</CTA>
          </Link>
        </div>
      </section>

      <BackgroundVideo src={video} />
    </Layout>
  );
}

const CTA = styled(Button)`
  &&& {
    text-transform: capitalize;
    color: #c83aa8;
    border: 1px solid #c83aa8;
  }
`;

const Icon = styled(LocationOn)`
  position: relative;
  top: 4px;
  left: 2px;
`;
