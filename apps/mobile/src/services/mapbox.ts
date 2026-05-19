const mapboxToken = process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN;

export function getMapboxConfig() {
  return {
    provider: 'mapbox',
    configured: Boolean(mapboxToken),
    mode: mapboxToken ? 'live' : 'placeholder',
  };
}
