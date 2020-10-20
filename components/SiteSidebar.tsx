/** @jsx jsx */
import { useContext } from 'react';
import { jsx } from 'theme-ui';
import { Flex } from 'theme-ui';
import { LayoutContext } from './SiteLayout';
import { LocalStyles } from './SiteTheme';

const styles: LocalStyles = {
  container: {
    backgroundColor: 'whitesmoke',
    flexDirection: 'column',
    flex: '0 1 auto',
    minWidth: 320,
    p: 5
  },
  content: {
    position: 'fixed'
  }
};

const SiteSidebar = ({ sx = {} }) => {
  const { isMenuOpen, toggleMenu } = useContext(LayoutContext);
  console.log(isMenuOpen);
  return (
    <>
      {isMenuOpen && (
        <Flex as="aside" sx={{ ...sx, ...styles.container }}>
          <Flex sx={styles.content}>Sidebar</Flex>
        </Flex>
      )}
    </>
  );
};
export default SiteSidebar;
