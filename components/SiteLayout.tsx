import { Grommet } from 'grommet';
import React, { FC } from 'react';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

const theme = {
  global: {
    font: {
      // family: 'Fira Code',
      size: '18px',
      height: '20px'
    },
    colors:{
      brand: '#303030'
    } 
  }
};

export default function SiteLayout({ children }) {
  return (
    <Grommet theme={theme}>
      <SiteHeader/>
      {children}
      <SiteFooter />
    </Grommet>
  );
}
