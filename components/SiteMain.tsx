import React from 'react';
import { Container } from 'theme-ui';
const styles = {
  main: { overflowX: 'hidden' },
  container: {
    maxWidth: (theme) => [
      '100vw',
      '100vw',
      `calc( ${theme.breakpoints[3]} - ${theme.sizes.sidebar}px )`
    ],
    // minWidth: ['100%', 200 , 100, 100],
    // mr: 'auto',
    // ml: 4,
    px: [4, null, null, 6],
    py: [4, null, null, 5]
  }
};
const SiteMain = ({ children }) => (
  <Container as='main' sx={styles.main}>
    <Container sx={styles.container}>{children}</Container>
  </Container>
);
export default SiteMain;
