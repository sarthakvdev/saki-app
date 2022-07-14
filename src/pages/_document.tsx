import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const metadata: {
      title: string;
      description: string;
      domain: string;
      twitterHandle: string;
    } = {
      title: "Saki",
      description: "Description about the Project",
      domain: "#",
      twitterHandle: "@xyz",
    };

    return (
      <Html>
        <Head>
          <meta name="title" content={metadata.title} />
          <meta name="description" content={metadata.description} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={metadata.domain} />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:image" content="/cover-image.png" />
          <meta name="keywords" content="nft, near, crypto, pfp" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={metadata.domain} />
          <meta name="twitter:site" content={metadata.domain} />
          <meta name="twitter:creator" content="@yield_bay" />
          <meta property="twitter:title" content={metadata.title} />
          <meta property="twitter:description" content={metadata.description} />
          <meta property="twitter:image" content="/cover-image.png" />

          <link rel="icon" href="/favicon/favicon.ico" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/favicon/android-chrome-512x512.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/favicon/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
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
