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
  text: {
    brand: {
      fontFamily: 'headings',
      fontWeight: 'bold',
      fontSize: '1.25rem'
    }
  },
  buttons:{
    menu: {
        width: 'unset',
        height: 'unset',
        padding: '0.5rem',
        cursor: 'pointer',
        visibility: [null,null,null,null,'hidden']
    }
  },
  styles: {
    inlineCode: {
      color: 'black',
      fontFamily: 'code',
      fontSize: 'smaller',
      padding: '2px 5px',
      backgroundColor: '#eee'
    },
    code: { ...okaidia, fontFamily: 'code', fontSize: 'smaller' },
    pre: {
      maxHeight: '600px',
      overflowX: 'auto',
      borderRadius: '10px',
      padding: '20px 0',
      counterReset: 'line',
      '.token-line': {
        padding: '0 30px 0 20px',
        '&::before': {
          counterIncrement: 'line',
          content: 'counter(line)',
          paddingRight: '10px',
          marginRight: '20px',
          borderRight: '1px solid dimgray',
          textAlign: 'right',
          width: '18px',
          display: 'inline-block'
        }
      },
      '.highlight': {
        '&::before': {
          color: 'yellow.3'
        }
      }
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
    },
    // responsiveness
    sizes: {
      container: ['100%', 600, 800, 1200]
    },
    // imported from preset-bootstrap
    img: {
      maxWidth: '100%',
      height: 'auto'
    },
    blockquote: {
      fontSize: 2,
      mb: 3,
      '>p': {
        display: 'flex',
        backgroundColor: 'whitesmoke',
        '&::before': {
          background: 'lightgray',
          padding: '0 1px',
          margin: '0 10px 0 0',
          content: `''`,
          left: 0
        }
      }
    },
    table: {
      width: '100%',
      marginBottom: 3,
      color: 'gray.9',
      borderCollapse: 'collapse'
    },
    th: {
      verticalAlign: 'bottom',
      borderTopWidth: '2',
      borderTopStyle: 'solid',
      borderTopColor: 'gray.3',
      borderBottomWidth: 2,
      borderBottomStyle: 'solid',
      borderBottomColor: 'gray.3',
      padding: '.75rem',
      textAlign: 'inherit'
    },
    td: {
      borderBottomWidth: 2,
      borderBottomStyle: 'solid',
      borderBottomColor: 'gray.3',
      verticalAlign: 'top',
      padding: '.75rem'
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
