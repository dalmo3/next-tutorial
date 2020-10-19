import dark from '@theme-ui/preset-dark';
import tailwind from '@theme-ui/preset-tailwind';
import { merge, Theme } from 'theme-ui';

// console.log(tailwind)
const theme: Theme = merge(tailwind, {
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    h2: 'Fira Sans'
  },
  styles: {
    root: {
      fontFamily: 'Fira Sans'
    }
  }
});

export default theme;
