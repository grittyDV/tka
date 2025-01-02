// services/analytics.ts
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent, Analytics } from "firebase/analytics";
import { CookieManager } from '../utils/CookieManager';

const firebaseConfig = {
    apiKey: "AIzaSyD3fh241WANsA2Fq7V16Y2Lc9pEUv8e4vU",
    authDomain: "tkaweb-64597.firebaseapp.com",
    projectId: "tkaweb-64597",
    storageBucket: "tkaweb-64597.firebasestorage.app",
    messagingSenderId: "473636336956",
    appId: "1:473636336956:web:5a603e0a44129b24ab5a39",
    measurementId: "G-Q5JQ32GYTS"
  };

class AnalyticsService {
  private analytics: Analytics | null = null;
  private initialized = false;

  initialize() {
    if (this.initialized) return;

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    this.analytics = getAnalytics(app);
    
    // Register with CookieManager
    CookieManager.registerAnalytics(this.analytics);

    this.initialized = true;
  }

  trackEvent(eventName: string, eventParams?: Record<string, any>) {
    if (this.analytics && CookieManager.isAnalyticsAvailable()) {
      logEvent(this.analytics, eventName, eventParams);
    }
  }

  getInstance() {
    if (!this.initialized) {
      this.initialize();
    }
    return this.analytics;
  }
}

export const analyticsService = new AnalyticsService();