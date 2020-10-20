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
  showMenu: boolean;
  showOverlay: boolean;
  toggleMenu?: () => void;
}

export const LayoutContext = createContext({
  showMenu: false
} as ILayoutContext);

const SiteLayout = ({ children }) => {
  const [showMenu, setshowMenu] = useState(false);
  const [menuOpenByUser, setMenuOpenByUser] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const size = useBreakpointIndex({ defaultIndex: 0 });
  const toggleMenu = () => {
    setMenuOpenByUser((menuOpenByUser) => !menuOpenByUser);
    setshowMenu((showMenu) => !showMenu);
  };

  const layoutContextObject: ILayoutContext = {
    showMenu,
    showOverlay,
    toggleMenu
  };

  // auto show sidebar on big screens
  useEffect(() => {
    setshowMenu(menuOpenByUser || size >= 4);
  }, [size]);

  // show overlay on small screens
  useEffect(() => {
    setShowOverlay(showMenu && size < 2);
  }, [showMenu, size]);

  // disable scrollying when overlay shows
  useEffect(() => {
    document.body.style.overflow = showOverlay ? 'hidden' : 'unset';
  }, [showOverlay]);

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
