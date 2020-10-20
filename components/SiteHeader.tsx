import React, { FC, useContext } from 'react';
import { Box, Flex, MenuButton, Text } from 'theme-ui';
import Link from './Link';
import { LayoutContext } from './SiteLayout';

export const SiteHeader: FC = () => {
  const { isMenuOpen, toggleMenu } = useContext(LayoutContext);
  return (
    <Flex
      sx={{
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'whitesmoke'
      }}
      // pl={6}
      pr={4}
      py={1}
    >
      <Box
        sx={{
          //@ts-ignore
          width: (theme) => (isMenuOpen ? theme.sizes.sidebar : 184),
          position: (theme) => (isMenuOpen ? 'fixed' : 'absolute'),
          left: 0,
          textAlign: 'center'
        }}
      >
        <Link href="/">
          <Text variant="brand">dalmo.dev</Text>
        </Link>
      </Box>

      <MenuButton variant="menu" onClick={toggleMenu} />
    </Flex>
  );
};

export default SiteHeader;
