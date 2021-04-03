import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Olivia Callaghan - North London based beautician."
            key="description"
          />
          <meta
            property="og:image"
            content="/images/livvy-logo-icon.png"
            key="image"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />

          <meta name="application-name" content="Livvy Beauty" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Livvy Beauty" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          {/* <meta
          name="msapplication-config"
          content="icons/browserconfig.xml"
        /> */}
          <meta name="msapplication-TileColor" content="#080708" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#080708" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="icons/icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="icons/icon-72x72.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="icons/icon-72x72.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="icons/icon-72x72.png" color="#080708" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://livvy.beauty" />
          <meta name="twitter:title" content="Livvy Beauty" />
          <meta
            name="twitter:description"
            content="Olivia Callaghan - North London based beautician."
          />
          <meta name="twitter:image" content="icons/icon-192x192.png" />
          <meta name="twitter:creator" content="@DanielMarcSimms" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Livvy Beauty" />
          <meta
            property="og:description"
            content="Olivia Callaghan - North London based beautician."
          />
          <meta property="og:site_name" content="Livvy Beauty" />
          <meta property="og:url" content="https://livvy.beauty" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

}
