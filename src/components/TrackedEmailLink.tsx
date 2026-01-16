'use client';

/**
 * TrackedEmailLink Component
 * Wraps email links (mailto:) with automatic click tracking
 */

import { useAnalytics } from '@/hooks/useAnalytics';
import { ReactNode, MouseEvent } from 'react';

export interface TrackedEmailLinkProps {
  children: ReactNode;
  href: string;
  linkText: string;
  location?: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
}

export default function TrackedEmailLink({
  children,
  href,
  linkText,
  location,
  className,
  onClick,
  target,
  rel,
}: TrackedEmailLinkProps) {
  const { trackEmailClick } = useAnalytics();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Extract email address from mailto: href
    const emailMatch = href.match(/mailto:(.+)/i);
    const emailAddress = emailMatch ? emailMatch[1] : href;
    
    trackEmailClick(emailAddress, linkText, location);
    
    // Call original onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
