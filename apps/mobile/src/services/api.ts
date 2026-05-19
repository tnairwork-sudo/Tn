const apiBaseUrl = process.env.EXPO_PUBLIC_API_BASE_URL ?? 'http://localhost:3000/v1';

export function getApiConfig() {
  return {
    baseUrl: apiBaseUrl,
    authMode: 'prototype-mock',
  };
}
