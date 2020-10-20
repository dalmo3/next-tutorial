import { Main } from 'next/document';
import React from 'react';
import { Box, Container, Flex } from 'theme-ui';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import SiteMain from './SiteMain';
import SiteSidebar from './SiteSidebar';
import { LocalStyles } from './SiteTheme';

const styles: LocalStyles = {
  full: {
    flexDirection: 'column',
    minHeight: '100vh'
  },
  middle: {
    flex: 'auto'
  }
};

const SiteLayout = ({ children }) => {
  return (
    <Flex sx={styles.full}>
      <SiteHeader />
      <Flex sx={styles.middle}>
        <SiteSidebar/>
        <SiteMain>{children}</SiteMain>
      </Flex>
      <SiteFooter />
    </Flex>
  );
};

export default SiteLayout;
