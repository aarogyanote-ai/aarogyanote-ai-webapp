/**
 * Firebase Analytics utilities
 * Provides functions for tracking events and page views
 */

import { Analytics, getAnalytics, logEvent } from 'firebase/analytics';
import { getFirebaseConfig } from './config';
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';

let analyticsInstance: Analytics | null = null;
let firebaseApp: FirebaseApp | null = null;

/**
 * Initialize Firebase app and analytics
 * Only initializes in production mode and on client-side
 * @returns Analytics instance or null if not available
 */
export function getAnalyticsInstance(): Analytics | null {
  // Only run on client-side
  if (typeof window === 'undefined') {
    return null;
  }

  // Only initialize in production
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  // Return existing instance if already initialized
  if (analyticsInstance) {
    return analyticsInstance;
  }

  try {
    // Initialize Firebase app if not already initialized
    if (getApps().length === 0) {
      const config = getFirebaseConfig();
      firebaseApp = initializeApp(config);
    } else {
      firebaseApp = getApps()[0];
    }

    // Initialize Analytics
    analyticsInstance = getAnalytics(firebaseApp);
    return analyticsInstance;
  } catch (error) {
    console.error('Failed to initialize Firebase Analytics:', error);
    return null;
  }
}

/**
 * Log a custom event
 * @param eventName - Name of the event
 * @param eventParams - Optional event parameters
 */
export function logAnalyticsEvent(
  eventName: string,
  eventParams?: Record<string, any>
): void {
  const analytics = getAnalyticsInstance();
  if (!analytics) {
    return;
  }

  try {
    logEvent(analytics, eventName, eventParams);
  } catch (error) {
    console.error(`Failed to log event ${eventName}:`, error);
  }
}

/**
 * Log a page view
 * @param path - Page path
 * @param title - Optional page title
 */
export function logPageView(path: string, title?: string): void {
  logAnalyticsEvent('page_view', {
    page_path: path,
    page_title: title || document.title,
  });
}

/**
 * Log a button click event
 * @param buttonName - Name/identifier of the button
 * @param location - Optional location/context where the button was clicked
 */
export function logButtonClick(buttonName: string, location?: string): void {
  logAnalyticsEvent('button_click', {
    button_name: buttonName,
    location: location || 'unknown',
  });
}

/**
 * Log a file download event
 * @param fileName - Name of the downloaded file
 */
export function logDownload(fileName: string): void {
  logAnalyticsEvent('file_download', {
    file_name: fileName,
  });
}
