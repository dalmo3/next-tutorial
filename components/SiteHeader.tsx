import { Box, Button, Text, ResponsiveContext } from 'grommet';
import { Code, Notification } from 'grommet-icons';
import Link from 'next/link';
import React, { FC, useContext } from 'react';

export const SiteHeader: FC = (props) => {
  const responsive = useContext(ResponsiveContext);
  // console.log(responsive);

  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="start"
      background="brand"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      {...props}
    >
      <Box direction="row" justify="between" align="center">
        <Code />
        <Text margin="none" size="large">
          dalmo.dev
        </Text>
      </Box>
    </Box>
  );
};

export default SiteHeader;
