import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="blog page about coffee" />
        <meta name="keywords" content="coffee, coffee beans, beans, coup" />
        <meta name="author" content="Gianicola Jara" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="robots" content="index,follow" />
        <meta name="google" content="notranslate" />
        <meta name="copyright" content="Gianicola Jara" />
        <meta name="application-name" content="coffee blog" />
        <meta property="og:title" content="coffee blog" />
        <meta property="og:description" content="blog page about coffee" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
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
