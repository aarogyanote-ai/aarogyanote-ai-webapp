'use client';

/**
 * TrackedLink Component
 * Wraps Next.js Link component with automatic click tracking
 * Automatically handles external URLs by rendering anchor tags
 */

import Link, { LinkProps } from 'next/link';
import { useAnalytics } from '@/hooks/useAnalytics';
import { ReactNode } from 'react';

export interface TrackedLinkProps extends Omit<LinkProps, 'href'> {
  children: ReactNode;
  linkText: string;
  location?: string;
  className?: string;
  href: string | LinkProps['href'];
  target?: string;
  rel?: string;
}

function isExternalUrl(href: string | LinkProps['href']): boolean {
  if (typeof href === 'string') {
    return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:');
  }
  return false;
}

export default function TrackedLink({
  children,
  linkText,
  location,
  href,
  className,
  target,
  rel,
  ...linkProps
}: TrackedLinkProps) {
  const { trackLinkClick } = useAnalytics();

  const handleClick = () => {
    // Convert href to string for tracking
    const linkUrl =
      typeof href === 'string' ? href : (href as any).pathname || href.toString();
    trackLinkClick(linkText, linkUrl, location);
  };

  // For external URLs, use anchor tag instead of Next.js Link
  if (typeof href === 'string' && isExternalUrl(href)) {
    return (
      <a
        href={href}
        className={className}
        onClick={handleClick}
        target={target}
        rel={rel}
        {...(linkProps as any)}
      >
        {children}
      </a>
    );
  }

  // For internal URLs, use Next.js Link
  return (
    <Link href={href} className={className} {...linkProps} onClick={handleClick}>
      {children}
    </Link>
  );
}
