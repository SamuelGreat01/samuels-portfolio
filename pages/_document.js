/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

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
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <meta name="author" content="Samuel Great" />
          <meta
            name="keywords"
            content="Samuel Great"
          />
          <meta property="og:locale" content="en-US" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Hi, I&#x27;m Samuel Great, Frontend developer, UX architect, and JavaScript engineer."
          />
          <meta
            property="og:description"
            content="Hi, I&#x27;m Samuel Great, Frontend developer, UX architect, and JavaScript engineer."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
     
        
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
         <link rel="shortcut icon" href="/icons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/icons/android-chrome-512x512.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="icon" href="/icons/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="robots" content="index, nofollow" />
          <link
            rel="author"
            href="/icons/favicon.ico"
          />
          <meta property="og:title" content="Samuel Great" />
      
          <meta
            name="apple-mobile-web-app-title"
            content="Samuel Great"
          />
          <meta name="next-head-count" content="21" />
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Extrabold.otf");
                font-weight:bold;
                font-display:swap;
                font-style:normal
              }
              
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Regular.otf");
                font-weight:normal;
                font-display:swap;
                font-style:normal
              }
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Medium.otf");
                font-weight:500;
                font-display:swap;
                font-style:normal
              }
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Bold.otf");
                font-weight:600;
                font-display:swap;
                font-style:normal
              }
            `,
            }}
          />
          <link rel="stylesheet" href="/css/normalize.css" />
          <link rel="stylesheet" href="/css/base.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
