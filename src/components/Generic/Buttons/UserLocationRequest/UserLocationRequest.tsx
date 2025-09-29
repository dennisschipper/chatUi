import { useState, useEffect } from 'react'
import { checkLocationPermission, type LocationPermissionState } from 'src/helpers/locationHelpers'
import { Tooltip } from '../../Popovers'
import type { IUserLocation } from 'src/types';

interface UserLocationRequestProps {
  active?: boolean;
  location?: IUserLocation
  updateLocation?: (location: IUserLocation | null) => void
}

export const UserLocationRequest = (props: UserLocationRequestProps) => {
  const { active = false } = props
  const [permissionState, setPermissionState] = useState<LocationPermissionState>('unsupported')
  const hasLocation = !!props.location

  useEffect(() => {
    checkLocationPermission().then(setPermissionState);
  }, [])

  const handleLocationReceived = (location: GeolocationPosition) => {
    const userLocation = {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    }
    props.updateLocation && props.updateLocation(userLocation)
  }

  const handleLocationError = (error: GeolocationPositionError) => {
    console.error('Location error:', error.message)
  }

  const onClick = () => {
    if (hasLocation) {
      props.updateLocation && props.updateLocation(null)
      return
    }

    if (permissionState === 'denied') {
      handleLocationError({ code: 1, message: "Location access denied by user." } as GeolocationPositionError)
      return
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleLocationReceived,
        handleLocationError,
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      )
    } else {
      handleLocationError({
        code: 0,
        message: "Geolocation is not supported by this browser."
      } as GeolocationPositionError)
    }
  }

  const disabled = permissionState === 'denied' || permissionState === 'unsupported'
  const className = `userLocationRequest ${active ? 'active' : ''} ${disabled ? 'disabled' : ''} ${hasLocation ? 'hasLocation' : ''}`
  
  const getTooltipContent = () => {
    if (permissionState === 'denied') return 'Location access denied'
    if (permissionState === 'unsupported') return 'Location not supported'
    if (hasLocation) return 'Clear location'
    return 'Share location'
  }
  
  const target = (
    <button className={className} onClick={onClick} disabled={disabled}>
      📍
    </button>
  )

  return (
    <Tooltip target={target} content={getTooltipContent()} />
  )
}
