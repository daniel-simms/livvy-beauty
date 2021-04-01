import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "@components/Layout";
import BackgroundVideo from "@components/BackgroundVideo";
import { getSortedPostsData } from "@utils/posts";

import styles from "@styles/index.module.css";

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
        <h1>
          Beauty Therapist
          <small>North London</small>
        </h1>
        <ul>
          <li>Eyebrow Tinting</li>
          <li>Gel Nails</li>
          <li>Waxing</li>
          <li>Facials</li>
          <li>Top Tier Company</li>
        </ul>
      </section>
    </Layout>
  );
}
