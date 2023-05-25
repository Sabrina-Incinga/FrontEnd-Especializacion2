export type TrackingSoftwareType = 'GOOGLE_ANALYTICS' | 'FACEBOOK_PIXEL' | 'AMPLITUDE';

export interface TrackingSoftware {
  trackEvent: (eventName: string, location: string) => void;
}

export interface TrackingSoftwareInit{
  initialize: () => void;
}
