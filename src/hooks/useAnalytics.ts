import { useEffect } from 'react';
import { analyticsService } from '../services/analytics';

export const useAnalytics = () => {
  useEffect(() => {
    analyticsService.initialize();
  }, []);

  const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
    analyticsService.trackEvent(eventName, eventParams);
  };

  return { trackEvent };
};

// Make it a module by adding an export
export default useAnalytics;