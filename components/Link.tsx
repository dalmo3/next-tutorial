import NextLink, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import { NavLink } from 'theme-ui';

const Link = ({ children, ...props }: PropsWithChildren<LinkProps>) => (
  <NextLink {...props} passHref>
    <NavLink>{children}</NavLink>
  </NextLink>
);
export default Link;
