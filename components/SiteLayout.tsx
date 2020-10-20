import { Main } from 'next/document';
import React, { Context, createContext, useEffect, useState } from 'react';
import { Box, Container, Flex } from 'theme-ui';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import SiteMain from './SiteMain';
import SiteSidebar from './SiteSidebar';
import { LocalStyles } from './SiteTheme';
import { useBreakpointIndex } from '@theme-ui/match-media';

const styles: LocalStyles = {
  full: {
    flexDirection: 'column',
    minHeight: '100vh'
  },
  middle: {
    flex: 'auto'
  }
};

interface ILayoutContext {
  isMenuOpen: boolean;
  toggleMenu?: () => void;
}

export const LayoutContext = createContext({
  isMenuOpen: false
} as ILayoutContext);

const SiteLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const size = useBreakpointIndex({ defaultIndex: 0 });
  useEffect(() => {
    setIsMenuOpen(size >= 4);
  }, [size]);

  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  const layoutContextObject: ILayoutContext = {
    isMenuOpen,
    toggleMenu
  };
  return (
    <LayoutContext.Provider value={layoutContextObject}>
      <Flex sx={styles.full}>
        <SiteHeader />
        <Flex sx={styles.middle}>
          <SiteSidebar />
          <SiteMain>{children}</SiteMain>
        </Flex>
        <SiteFooter />
      </Flex>
    </LayoutContext.Provider>
  );
};

export default SiteLayout;
