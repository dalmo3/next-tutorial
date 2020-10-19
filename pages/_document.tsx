import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { InitializeColorMode } from 'theme-ui';

export default class extends Document {
  render() {
    // Replace html lang attribute value with your language.
    return (
      <Html>
        <Head />
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
