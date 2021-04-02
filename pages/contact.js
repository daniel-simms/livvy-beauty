import Head from "next/head";
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact | Livvy Beauty</title>
        <meta
          name="description"
          content="Contact details for Livvy Beauty."
          key="description"
        />
        <meta name="og:title" content="Contact | Livvy Beauty" key="title" />
      </Head>
      <h1>Contact</h1>
    </Layout>
  );
}
