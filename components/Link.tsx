import NextLink, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import { NavLink, NavLinkProps } from 'theme-ui';

interface CustomLinkProps extends LinkProps {
  navLinkProps?: NavLinkProps;
}

const Link = ({
  children,
  navLinkProps,
  ...props
}: PropsWithChildren<CustomLinkProps>) => (
  <NextLink {...props} passHref>
    <NavLink {...navLinkProps}>{children}</NavLink>
  </NextLink>
);
export default Link;
