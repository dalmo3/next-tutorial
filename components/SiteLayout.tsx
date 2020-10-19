import React, { FC } from 'react';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import { ThemeProvider } from 'theme-ui';
import theme from 'styles/theme';
import 'fontsource-fira-sans';

export default function SiteLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <SiteHeader />
      {children}
      <SiteFooter />
    </ThemeProvider>
  );
}
