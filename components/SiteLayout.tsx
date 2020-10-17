import { base, Box, Grommet } from 'grommet';
import React, { FC } from 'react';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import 'fontsource-fira-sans';
import { deepMerge } from 'grommet/utils';

const theme = {
  global: {
    font: {
      family: 'Fira Sans',
      // size: '12px',
      // height: '20px',
      weight: 'light',
      h1: {
        size: '99px'
      }
    },
    colors: {
      brand: '#303030',
      secondary: '#FC58AA'
    },
    a: {
      font: {
        size: '99px'
      }
    }
  }
};

export default function SiteLayout({ children }) {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <SiteHeader />
        <Box direction="row" flex>
          <Box flex align="center">
            {children}
          </Box>
        </Box>
        <SiteFooter />
      </Box>
    </Grommet>
  );
}
