import React, { FC } from 'react';
import { Box, Flex, NavLink } from 'theme-ui';
import Link from './Link';

export const SiteFooter: FC = () => (
  <footer>
    <Flex
      sx={{
        flex: 'auto',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke',
        fontVariant: 'all-small-caps',
        textAlign: 'center',
        flexDirection: 'column',
        lineHeight: 'initial'
      }}
    >
      <Box>Made with 🤘 and Next.js</Box>
      <Box>
        <Link
          href="https://github.com/dalmo3/next-tutorial"
          navLinkProps={{ target: '_blank' }}
        >
          Source
        </Link>
      </Box>
    </Flex>
  </footer>
);

export default SiteFooter;
