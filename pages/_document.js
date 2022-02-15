import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "styles/stitches.config";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link
            rel="preload"
            href="/fonts/TWKEverett-Medium-web.woff2"
            as="font"
            type="font/woff2"
            crossOrigin
          />
          <link
            rel="preload"
            as="image"
            href="images/screenshots/product/default.svg"
          />
          <link
            rel="preload"
            as="image"
            href="images/screenshots/product/users.svg"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
