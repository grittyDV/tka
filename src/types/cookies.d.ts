// types/cookies.ts

export interface CookieConsent {
    essential: boolean;    // Always true
    analytics: boolean;    // Google Analytics
    functional: boolean;   // Website functionality preferences
    preferences: boolean;  // UI preferences
    timestamp: number;     // When consent was given/updated
    version: string;       // Consent policy version
  }
  
  export interface ConsentUpdateEvent extends CustomEvent {
    detail: CookieConsent;
  }
  
  declare global {
    interface WindowEventMap {
      'consentUpdate': ConsentUpdateEvent;
    }
  }