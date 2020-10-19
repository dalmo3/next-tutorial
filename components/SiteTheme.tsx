import dark from '@theme-ui/preset-dark';
import tailwind from '@theme-ui/preset-tailwind';
import { merge, SxStyleProp, Theme, ThemeProvider } from 'theme-ui';
// import 'fontsource-fira-sans';
// import 'fontsource-merriweather';
import React from 'react';
import Head from 'next/head';

export interface LocalStyles {
  [k: string]: SxStyleProp;
}
// console.log(tailwind)
const theme: Theme = merge(tailwind, {
  fonts: {
    body:
      'Fira Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    // body: 'Consolas',
    headings:
      'Merriweather, Fira Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
  },
  colors: {
    ...tailwind.colors,
    modes: {
      dark: dark.colors
    }
  },
  styles: {
    strong: {
      fontWeight: 600
    },
    root: {
      fontFamily: 'body'
    },
    h1: {
      fontFamily: 'headings'
      // fontVariant: 'small-caps',
      // fontWeight: 100
    },
    h2: {
      fontFamily: 'headings'
    },
    h3: {
      fontFamily: 'headings'
    },
    h4: {
      fontFamily: 'headings'
    },
    h5: {
      fontFamily: 'headings',
      fontVariant: 'small-caps',
      fontWeight: 100
    },
    h6: {
      fontFamily: 'headings'
    }
  },
  sizes: {
    container: ['100%', 600, 800, 1200]
  },
  links: {
    nav: {
      // fontSize: 99
    }
  }
});

const SiteTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;1,100"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;1,100"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </ThemeProvider>
  );
};

export default SiteTheme;
