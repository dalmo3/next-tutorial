import dark from '@theme-ui/preset-dark';
import tailwind from '@theme-ui/preset-tailwind';
import Head from 'next/head';
import { merge, SxStyleProp, Theme, ThemeProvider } from 'theme-ui';
// import 'fontsource-fira-sans/latin.css';
// import 'fontsource-fira-sans/latin-300.css';
// import 'fontsource-fira-sans/latin-400.css';
// import 'fontsource-fira-sans/latin-600.css';
// import 'fontsource-merriweather/latin.css';

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
  return <ThemeProvider theme={theme}>
    <Head>
      
    <link
            rel="preload"
            href="/assets/fonts/fira-sans.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
    </Head>
    
    {children}</ThemeProvider>;
};

export default SiteTheme;
