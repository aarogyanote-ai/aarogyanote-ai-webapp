/**
 * Firebase configuration
 * Loads configuration from environment variables
 */

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

/**
 * Get Firebase configuration from environment variables
 * @returns Firebase configuration object
 * @throws Error if required environment variables are missing
 */
export function getFirebaseConfig(): FirebaseConfig {
  const requiredEnvVars = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  // Check for missing required environment variables
  const missingVars = Object.entries(requiredEnvVars)
    .filter(([_, value]) => !value)
    .map(([key]) => `NEXT_PUBLIC_FIREBASE_${key.toUpperCase().replace(/([A-Z])/g, '_$1')}`);

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required Firebase environment variables: ${missingVars.join(', ')}`
    );
  }

  const config: FirebaseConfig = {
    apiKey: requiredEnvVars.apiKey!,
    authDomain: requiredEnvVars.authDomain!,
    projectId: requiredEnvVars.projectId!,
    storageBucket: requiredEnvVars.storageBucket!,
    messagingSenderId: requiredEnvVars.messagingSenderId!,
    appId: requiredEnvVars.appId!,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

  return config;
}
