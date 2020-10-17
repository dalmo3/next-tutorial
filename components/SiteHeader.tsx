import { Box, Button, Heading, ResponsiveContext } from 'grommet';
import { Notification } from 'grommet-icons';
import Link from 'next/link';
import React, { FC, useContext } from 'react';

export const SiteHeader: FC = (props) => {
  const responsive = useContext(ResponsiveContext);
  console.log(responsive);

  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      {...props}
    >
      <Box direction="row">
        <Heading level="1" margin="none">
          My Blog
        </Heading>
        <Heading level="1" margin="none">
          My Blog
        </Heading>
      </Box>
      <Button icon={<Notification />} />
    </Box>
  );
};

export default SiteHeader;
