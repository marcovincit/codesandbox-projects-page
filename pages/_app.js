import { globalStyles } from "styles/globalStyles.js";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  globalStyles();
  return (
    <>
      <Head>
        <title>CodeSandbox | Projects Beta - Development reimagined.</title>
        <meta
          name="description"
          content="Experience the future of web development and build projects anywhere and anytime with your team."
        />

        <meta content="website" name="og:type" />
        <meta content="CodeSandbox | Projects Beta" name="og:site_name" />
        <meta
          content="CodeSandbox | Projects Beta - Development reimagined."
          name="og:title"
        />
        <meta
          content="Experience the future of web development and build projects anywhere and anytime with your team."
          name="og:description"
        />
        <meta
          content="https://projects.codesandbox.io/og-image.jpg"
          name="og:image"
        />
        <meta content="https://projects.codesandbox.io" name="og:url" />

        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
