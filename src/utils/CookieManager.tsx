// utils/CookieManager.ts

import type { CookieConsent } from '../types/cookies';
import { Analytics, setAnalyticsCollectionEnabled } from 'firebase/analytics';

interface AnalyticsInstance {
  instance: Analytics;
  initialized: boolean;
}

class CookieManagerClass {
  private readonly CONSENT_COOKIE_NAME = 'tka_cookie_consent';
  private readonly CONSENT_VERSION = '1.0';
  private readonly DEFAULT_EXPIRY_DAYS = 180; // 6 months
  private analyticsInstance: AnalyticsInstance | null = null;

  /**
   * Register Firebase Analytics instance
   */
  registerAnalytics(analytics: Analytics) {
    this.analyticsInstance = {
      instance: analytics,
      initialized: true
    };
    
    // Apply current consent settings
    const currentSettings = this.getConsent();
    if (currentSettings) {
      this.updateAnalyticsState(currentSettings.analytics);
    }
  }

  /**
   * Update Firebase Analytics collection state
   */
  private updateAnalyticsState(enabled: boolean) {
    if (this.analyticsInstance?.instance) {
      setAnalyticsCollectionEnabled(this.analyticsInstance.instance, enabled);
    }
  }

  /**
   * Sets a cookie with the specified options
   */
  private setCookie(name: string, value: string, days: number = this.DEFAULT_EXPIRY_DAYS) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; SameSite=Strict${window.location.protocol === 'https:' ? '; Secure' : ''}`;
  }

  /**
   * Gets a cookie by name
   */
  private getCookie(name: string): string | null {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  /**
   * Save consent preferences and update analytics state
   */
  setConsent(settings: Partial<CookieConsent>) {
    const currentSettings = this.getConsent();
    const newSettings: CookieConsent = {
      essential: true, // Essential cookies can't be disabled
      analytics: settings.analytics ?? currentSettings?.analytics ?? false,
      functional: settings.functional ?? currentSettings?.functional ?? false,
      preferences: settings.preferences ?? currentSettings?.preferences ?? false,
      timestamp: Date.now(),
      version: this.CONSENT_VERSION
    };

    // Save settings
    this.setCookie(
      this.CONSENT_COOKIE_NAME,
      JSON.stringify(newSettings),
      this.DEFAULT_EXPIRY_DAYS
    );

    // Update analytics state
    this.updateAnalyticsState(newSettings.analytics);

    // If analytics consent is withdrawn, clean up analytics cookies
    if (!newSettings.analytics && currentSettings?.analytics) {
      this.clearAnalyticsCookies();
    }

    // Emit consent change event
    window.dispatchEvent(new CustomEvent('consentUpdate', { 
      detail: newSettings 
    }));

    return newSettings;
  }

  /**
   * Get current consent settings
   */
  getConsent(): CookieConsent | null {
    try {
      const consent = this.getCookie(this.CONSENT_COOKIE_NAME);
      if (!consent) return null;
      return JSON.parse(consent);
    } catch {
      return null;
    }
  }

  /**
   * Check if specific cookie type has consent
   */
  hasConsent(type: keyof Omit<CookieConsent, 'timestamp' | 'version'>): boolean {
    const settings = this.getConsent();
    if (!settings) return type === 'essential';
    return settings[type];
  }

  /**
   * Check if consent needs renewal
   */
  needsRenewal(): boolean {
    const settings = this.getConsent();
    if (!settings) return true;

    const expiryTime = settings.timestamp + (this.DEFAULT_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
    return (
      settings.version !== this.CONSENT_VERSION ||
      Date.now() > expiryTime
    );
  }

  /**
   * Clear analytics cookies
   */
  clearAnalyticsCookies() {
    // Firebase Analytics cookies
    const firebaseCookies = [
      '_ga',
      '_gid',
      '_gat',
      `_ga_${this.analyticsInstance?.instance.app.options.measurementId}`,
      'firebase:host:*'
    ];

    firebaseCookies.forEach(name => {
      if (name.includes('*')) {
        // Handle wildcard cookies
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
          const cookieName = cookie.split('=')[0].trim();
          if (cookieName.startsWith(name.replace('*', ''))) {
            this.setCookie(cookieName, '', -1);
          }
        });
      } else {
        this.setCookie(name, '', -1);
      }
    });
  }

  /**
   * Check if analytics is available and consented
   */
  isAnalyticsAvailable(): boolean {
    return this.analyticsInstance?.initialized === true && this.hasConsent('analytics');
  }
}

// Export singleton instance
export const CookieManager = new CookieManagerClass();