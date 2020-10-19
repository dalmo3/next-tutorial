import React, { FC } from 'react';
import { Button } from 'theme-ui';
import Link from './Link';

export const SiteHeader: FC = () => {
  return (
    <Link href="/">
      <Button variant="outline">Home</Button>
    </Link>
  );
};

export default SiteHeader;
