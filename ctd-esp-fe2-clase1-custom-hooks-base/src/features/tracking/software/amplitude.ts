import { TrackingSoftware, TrackingSoftwareInit } from 'features/tracking/tracking.types';

abstract class AmplitudeTrackingSoftware implements TrackingSoftware, TrackingSoftwareInit {
  private initialized = false;

  initialize(): void {
    this.initialized = true;
    // DO EXTRA LOGIC
  }

  trackEvent(eventName: string, location: string): void {
    if (this.initialized) {
      console.log('Event: ' + eventName + ' dispatched from: ' + location);
    }
  }
}

export default AmplitudeTrackingSoftware;
