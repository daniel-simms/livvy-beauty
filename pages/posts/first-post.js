import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Layout from '@/components/layout'


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Livvy.beauty - First Post</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <h1>First Post</h1>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Olivia Callaghan"
      />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
