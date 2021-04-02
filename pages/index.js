import Head from "next/head";

import { LocationOn } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import styled from "styled-components";

import Layout, { siteTitle } from "../components/Layout";
import BackgroundVideo from "../components/BackgroundVideo";
import { getSortedPostsData } from "../utils/posts";
import styles from "../styles/index.module.css";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <BackgroundVideo src="/videos/nails-2.mp4" />

      <section className={styles.heading}>
        <div>
        <h1>
          Beautician
          <small>
            <Icon fontSize="large" /> North London
          </small>
        </h1>
        {/* <ul>
          <li>Eyebrow Tinting</li>
          <li>Gel Nails</li>
          <li>Waxing</li>
          <li>Top Tier Company</li>
        </ul> */}
        <Link href="/treatments">
          <CTA variant="outlined">Get Pampered 💅🏻</CTA>
        </Link>
        </div>
      </section>
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
