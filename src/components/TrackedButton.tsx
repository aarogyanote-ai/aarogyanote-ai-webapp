'use client';

/**
 * TrackedButton Component
 * Wraps buttons, anchor tags, or Next.js Link styled as buttons with automatic click tracking
 */

import { useAnalytics } from '@/hooks/useAnalytics';
import { ReactNode, MouseEvent } from 'react';
import Link, { LinkProps } from 'next/link';

export interface TrackedButtonProps {
  children: ReactNode;
  buttonId: string;
  location?: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  // For anchor tags
  href?: string;
  target?: string;
  rel?: string;
  // For Next.js Link
  asLink?: boolean;
  linkHref?: LinkProps['href'];
  // For button elements
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function TrackedButton({
  children,
  buttonId,
  location,
  className,
  onClick,
  href,
  target,
  rel,
  asLink = false,
  linkHref,
  type = 'button',
  disabled,
}: TrackedButtonProps) {
  const { trackButtonClick } = useAnalytics();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    trackButtonClick(buttonId, location);
    // Call original onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  // If it's a Next.js Link styled as button
  if (asLink && linkHref) {
    return (
      <Link
        href={linkHref}
        className={className}
        onClick={handleClick}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  // If it's an anchor tag
  if (href) {
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

  // Default: button element
  return (
    <button
      type={type}
      className={className}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
