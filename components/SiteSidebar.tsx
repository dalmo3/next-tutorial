/** @jsx jsx */
import { useContext } from 'react';
import { Flex, Divider, jsx, Text, Box } from 'theme-ui';
import Link from './Link';
import { LayoutContext } from './SiteLayout';
import { LocalStyles } from './SiteTheme';

const styles: LocalStyles = {
  container: {
    backgroundColor: 'whitesmoke',
    flexDirection: 'row',
    flex: '0 1 auto',
    //@ts-ignore
    minWidth: (theme) => theme.sizes.sidebar,
    //@ts-ignore
    maxWidth: (theme) => theme.sizes.sidebar,
  },
  content: {
    py: 5,
    px: 4,
    position: 'fixed',
    flexDirection: 'column',
    minWidth: 'inherit',
    maxWidth: 'inherit',
  },
  links: {
    flexDirection: 'column',
  },
};

const SiteSidebar = ({ sx = {} }) => {
  const { showMenu, showOverlay, toggleMenu } = useContext(LayoutContext);
  return (
    <>
      {showMenu && (
        <Flex as='aside' sx={{ ...sx, ...styles.container }}>
          <Flex sx={styles.content}>
            <Text>I'm Dalmo Mendonça, React developer.</Text>
            <Divider />
            <Flex sx={styles.links} onClick={toggleMenu}>
              <Link href='/'>Home</Link>
              <Link href='/projects'>Projects</Link>
              <Link href='/'>CV</Link>
              <Link href='/contact'>Contact</Link>
            </Flex>
          </Flex>
          {showOverlay && (
            <Box
              sx={{
                bg: '#303030dd',
                //@ts-ignore
                width: (theme) => `calc( 100vw - ${theme.sizes.sidebar}px )`,
                right: 0,
                position: 'absolute',
                height: '100vh',
              }}
              onClick={toggleMenu}
            />
          )}
        </Flex>
      )}
    </>
  );
};
export default SiteSidebar;
