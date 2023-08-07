import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="将你的句子用当代艺术的语言输出"
          />
          <script async src="https://analytics.huangyafei.com/script.js" data-website-id="b7663263-bc40-4bd3-9d1a-b07590fd32ed"></script>
        </Head>
        <body className="bg-yellow-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
