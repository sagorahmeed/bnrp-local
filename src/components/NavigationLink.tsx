'use client';

import clsx from 'clsx';
import { ComponentProps } from 'react';
import { Link } from '@/i18n/navigation';

interface NavigationLinkProps extends ComponentProps<typeof Link> {
  className?: string;
  href: any;
}


export default function NavigationLink({
  href,
  className,
  ...rest
}:NavigationLinkProps) {
  return (
    <Link
      className={clsx(
        'inline-block px-2 py-3 transition-colors',
        className
      )}
      href={href}
      {...rest}
    />
  );
}
