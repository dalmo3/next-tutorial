import dark from '@theme-ui/preset-dark';
import tailwind from '@theme-ui/preset-tailwind';
import { merge, SxStyleProp, Theme, ThemeProvider } from 'theme-ui';
import 'fontsource-fira-sans';
import 'fontsource-merriweather';

export interface LocalStyles {
  [k: string]: SxStyleProp;
}
// console.log(tailwind)
const theme: Theme = merge(tailwind, {
  fonts: {
    body: 'Fira Sans, Open Sans',
    headings: 'Merriweather, Fira Sans, Open Sans'
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
  return <ThemeProvider theme={theme}> {children}</ThemeProvider>;
};

export default SiteTheme;
