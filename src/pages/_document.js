import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />

        {/* theme js */}
        <script async src='/js/main.js'></script>
      </body>
    </Html>
  );
}
