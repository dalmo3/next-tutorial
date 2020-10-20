import React from 'react';
import { Container } from 'theme-ui';
const styles = {
  container: {
    // maxWidth: ['100%', 600, 800, 1200],
    // minWidth: ['100%', 400, 600, 800],
    mx: 'auto',
    px: 5,
    py: 4
  }
};
const SiteMain = ({children}) => (
  <main>
    <Container sx={styles.container}>{children}</Container>
  </main>
);
export default SiteMain;
