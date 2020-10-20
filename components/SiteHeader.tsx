import React, { FC } from 'react';
import { Box, Flex, MenuButton, Text } from 'theme-ui';
import Link from './Link';

export const SiteHeader: FC = () => {
  return (
    <Flex
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'whitesmoke'
      }}
      px={4}
      py={1}
    >
      <Box>
        <Link href="/">
          <Text variant="brand">dalmo.dev</Text>
        </Link>
      </Box>

      <MenuButton variant="menu" />
    </Flex>
  );
};

export default SiteHeader;
