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
    minWidth: (theme) => theme.sizes.sidebar
  },
  content: {
    py: 5,
    px: 4,
    position: 'fixed',
    flexDirection: 'column'
  },
  links: {
    flexDirection: 'column'
  }
};

const SiteSidebar = ({ sx = {} }) => {
  const { isMenuOpen, toggleMenu } = useContext(LayoutContext);
  return (
    <>
      {isMenuOpen && (
        <Flex as='aside' sx={{ ...sx, ...styles.container }}>
          <Flex sx={styles.content}>
            <Text>Some text here</Text>
            <Divider />
            <Flex sx={styles.links}>
              <Link href='/'>Home</Link>
              <Link href='/'>Projects</Link>
              <Link href='/'>CV</Link>
              <Link href='/'>Contact</Link>
            </Flex>
          </Flex>
          <Box
            sx={{
              bg: '#303030dd',
              width: (theme) => `calc( 100vw - ${theme.sizes.sidebar}px )`,
              right: 0,
              position: 'absolute',
              height: '10000%'
            }}
            onClick={toggleMenu}
          />
        </Flex>
      )}
    </>
  );
};
export default SiteSidebar;
