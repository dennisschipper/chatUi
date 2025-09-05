import { useState, useEffect, useContext } from 'react'
import { checkLocationPermission, type LocationPermissionState } from 'src/helpers/locationHelpers'
import { Tooltip } from '../../Popovers'
import { AppContext } from 'src/components/CityScout/AppContext/AppContext'

interface UserLocationRequestProps {
  active?: boolean;
}

export const UserLocationRequest = (props: UserLocationRequestProps) => {
  const { active = false } = props
  const { appState, dispatch } = useContext(AppContext)
  const [permissionState, setPermissionState] = useState<LocationPermissionState>('unsupported')
  
  const hasLocation = !!appState.user.location

  useEffect(() => {
    checkLocationPermission().then(setPermissionState);
  }, [])

  const handleLocationReceived = (location: GeolocationPosition) => {
    const userLocation = {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    }
    dispatch({ type: 'setUserLocationAction', payload: { location: userLocation } })
  }

  const handleLocationError = (error: GeolocationPositionError) => {
    console.error('Location error:', error.message)
  }

  const onClick = () => {
    if (hasLocation) {
      dispatch({ type: 'clearUserLocationAction' })
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
