'use client';

/**
 * Custom hook for Firebase Analytics
 * Provides easy-to-use functions for tracking events
 */

import {
  logAnalyticsEvent,
  logPageView,
  logButtonClick,
  logDownload,
  logLinkClick,
  logEmailClick,
} from '@/lib/firebase/analytics';

export interface UseAnalyticsReturn {
  trackEvent: (eventName: string, params?: Record<string, any>) => void;
  trackPageView: (path: string, title?: string) => void;
  trackButtonClick: (buttonName: string, location?: string) => void;
  trackDownload: (fileName: string) => void;
  trackLinkClick: (linkText: string, linkUrl: string, location?: string) => void;
  trackEmailClick: (
    emailAddress: string,
    linkText: string,
    location?: string
  ) => void;
}

/**
 * Hook for tracking analytics events
 * @returns Object with tracking functions
 */
export function useAnalytics(): UseAnalyticsReturn {
  return {
    trackEvent: (eventName: string, params?: Record<string, any>) => {
      logAnalyticsEvent(eventName, params);
    },
    trackPageView: (path: string, title?: string) => {
      logPageView(path, title);
    },
    trackButtonClick: (buttonName: string, location?: string) => {
      logButtonClick(buttonName, location);
    },
    trackDownload: (fileName: string) => {
      logDownload(fileName);
    },
    trackLinkClick: (linkText: string, linkUrl: string, location?: string) => {
      logLinkClick(linkText, linkUrl, location);
    },
    trackEmailClick: (
      emailAddress: string,
      linkText: string,
      location?: string
    ) => {
      logEmailClick(emailAddress, linkText, location);
    },
  };
}
