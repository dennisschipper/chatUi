export type LocationPermissionState = 'granted' | 'denied' | 'prompt' | 'unsupported'

export const checkLocationPermission = async (): Promise<LocationPermissionState> => {
  try {
    const permission = await navigator.permissions.query({ name: 'geolocation' });
    
    switch (permission.state) {
      case 'granted':
        return 'granted';
      case 'denied':
        return 'denied';
      case 'prompt':
        return 'prompt';
      default:
        return 'unsupported';
    }
  } catch (error) {
    return 'unsupported';
  }
}