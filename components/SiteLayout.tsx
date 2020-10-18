import React, { FC } from 'react';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import { ThemeProvider } from 'theme-ui'
import theme from 'styles/theme'

export default function SiteLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <SiteHeader />
      {children}
      <SiteFooter />
    </ThemeProvider>
  );
}
