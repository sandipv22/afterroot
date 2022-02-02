import "../src/styles/global.scss"
// import "tailwindcss/tailwind.css"
import React from "react"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
