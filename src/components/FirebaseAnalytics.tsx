'use client';

/**
 * Firebase Analytics Component
 * Initializes Firebase Analytics and automatically tracks page views
 */

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { getAnalyticsInstance, logPageView } from '@/lib/firebase/analytics';

export default function FirebaseAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only initialize in production and on client-side
    if (process.env.NODE_ENV !== 'production' || typeof window === 'undefined') {
      return;
    }

    // Initialize Firebase Analytics
    const analytics = getAnalyticsInstance();
    if (!analytics) {
      return;
    }

    // Track initial page view
    const fullPath = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
    logPageView(fullPath);
  }, [pathname, searchParams]);

  // This component doesn't render anything
  return null;
}
