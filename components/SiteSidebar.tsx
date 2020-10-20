/** @jsx jsx */
import { useContext } from 'react';
import { Flex, Divider, jsx, Text } from 'theme-ui';
import Link from './Link';
import { LayoutContext } from './SiteLayout';
import { LocalStyles } from './SiteTheme';

const styles: LocalStyles = {
  container: {
    backgroundColor: 'whitesmoke',
    flexDirection: 'column',
    flex: '0 1 auto',
    //@ts-ignore
    minWidth: theme => theme.sizes.sidebar,
    py: 5,
    px: 4
  },
  content: {
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
        <Flex as="aside" sx={{ ...sx, ...styles.container }}>
          <Flex sx={styles.content}>
            <Text>Some text here</Text>
            <Divider/>
            <Flex sx={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/">Projects</Link>
              <Link href="/">CV</Link>
              <Link href="/">Contact</Link>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};
export default SiteSidebar;
