import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'crypto';

@Injectable()
export class S3Service {
  constructor(private readonly configService: ConfigService) {}

  getConfig() {
    const bucket = this.configService.get<string>('S3_BUCKET_NAME');
    const region = this.configService.get<string>('AWS_REGION') ?? 'ap-south-1';

    return {
      provider: 'aws-s3',
      configured: Boolean(bucket),
      bucket,
      region,
      mode: bucket ? 'live' : 'placeholder',
    };
  }

  createSignedUploadUrl(ownerId: string, mimeType = 'image/jpeg') {
    const key = `uploads/${ownerId}/${randomUUID()}`;
    const config = this.getConfig();

    return {
      bucketKey: key,
      mimeType,
      uploadUrl: config.configured
        ? `https://${config.bucket}.s3.${config.region}.amazonaws.com/${key}?X-Amz-Signature=placeholder`
        : `https://example.local/mock-s3/${key}`,
      expiresInSeconds: 900,
      storage: config,
    };
  }
}
