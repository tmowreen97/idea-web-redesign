import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
            name="description"
            content="IDEA CSC (Construction Solutions Company), a sister company to IDEA AEC, provides World Class Inter-Disciplinary Construction and Engineering services in Bangladesh."
            key="desc"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
