import { Box, Container, Flex } from 'theme-ui';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import { LocalStyles } from './SiteTheme';

const styles: LocalStyles = {
  full: {
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: '1 1 auto',
    // maxWidth: ['100%', 600, 800, 1200],
    // minWidth: ['100%', 400, 600, 800],
    mx: 'auto',
    px: 3,
    py: 4
  }
};

const SiteLayout = ({ children }) => {
  return (
    <Flex sx={styles.full}>
      <SiteHeader />
      <Container sx={styles.main}>{children}</Container>
      <SiteFooter />
    </Flex>
  );
};

export default SiteLayout;
