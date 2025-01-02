// utils/cookieManager.ts
export const CookieManager = {
  setConsent(type: 'all' | 'essential' | 'none') {
    localStorage.setItem('cookieConsent', type);
  },

  getConsent() {
    return localStorage.getItem('cookieConsent');
  },

  hasConsent() {
    return this.getConsent() === 'all';
  },

  clearCookies() {
    const cookies = document.cookie.split(';');
    
    cookies.forEach(cookie => {
      document.cookie = cookie.trim().split('=')[0] + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    });
  }
};