import Document, { Head, Html, Main, NextScript } from "next/document"

export default class extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head />
        {/*<SEO title={"AfterROOT"} />*/}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
