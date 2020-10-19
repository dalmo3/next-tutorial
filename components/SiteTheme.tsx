import dark from '@theme-ui/preset-dark';
import tailwind from '@theme-ui/preset-tailwind';
import { merge, SxStyleProp, Theme, ThemeProvider } from 'theme-ui';
// import 'fontsource-fira-sans/latin.css';
import 'fontsource-fira-sans/latin-300.css';
import 'fontsource-fira-sans/latin-400.css';
import 'fontsource-fira-code/latin-400.css';
import 'fontsource-fira-sans/latin-600.css';
import 'fontsource-merriweather/latin.css';
import Prism from '@theme-ui/prism';
import okaidia from '@theme-ui/prism/presets/prism-okaidia.json';

import Link from './Link';

export interface LocalStyles {
  [k: string]: SxStyleProp;
}
const theme: Theme = merge(tailwind as Theme, {
  fonts: {
    body:
      'Fira Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    // body: 'Consolas',
    headings:
      'Merriweather, Fira Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    code: 'Fira Code, Consolas, monospace'
  },
  colors: {
    ...tailwind.colors,
    modes: {
      dark: dark.colors
    }
  },
  styles: {
    inlineCode: {
      fontFamily: 'code',
      fontSize: 'smaller',
      padding: '2px 5px',
      backgroundColor: '#eee'
    },
    code: { ...okaidia, fontFamily: 'code', fontSize: 'smaller' },
    pre: {
      '.highlight': {
        background: 'hsla(55,0%,30,$,.5)'
      },
      maxHeight: '600px',
      overflowX: 'auto',
      padding: '20px 20px'
    },
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

const components = {
  pre: ({ children }) => <>{children}</>,
  code: Prism
};

const SiteTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme} components={components}>
      {children}
    </ThemeProvider>
  );
};

export default SiteTheme;
