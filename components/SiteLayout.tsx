import React, { FC } from 'react';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export default function SiteLayout({ children }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
