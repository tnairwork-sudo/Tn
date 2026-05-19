const bucket = process.env.EXPO_PUBLIC_S3_BUCKET_NAME;

export function getStorageConfig() {
  return {
    provider: 'aws-s3',
    configured: Boolean(bucket),
    bucket: bucket ?? 'placeholder-bucket',
    mode: bucket ? 'live' : 'placeholder',
  };
}
