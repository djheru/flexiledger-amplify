/**
 * TODO: Update this component to use your client-side framework's link
 * component. We've provided examples of how to do this for Next.js, Remix, and
 * Inertia.js in the Catalyst documentation:
 *
 * https://catalyst.tailwindui.com/docs#client-side-router-integration
 */

import * as Headless from '@headlessui/react';
import React, { forwardRef } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export const Link = forwardRef(function Link(
  props: { href: NavLinkProps['to'] } & Omit<NavLinkProps, 'to'>,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Headless.DataInteractive>
      <NavLink {...props} to={props.href} ref={ref} />
    </Headless.DataInteractive>
  );
});
