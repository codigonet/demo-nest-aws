import { Injectable } from '@nestjs/common';

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

@Injectable()
export class AppService {

  getHello(): string {
    return 'DEMO NEST on AWS SignedURL!';
  }

  async getSignedS3URL(): Promise<string>{
    const expires = 20; // seconds

    const clientParams={
      region: "us-east-1",
      aws_access_key_id: "ASDFAKEAWS",
      aws_secret_access_key: "ASDFAKEAWS"
    };
    const getObjectParams={Bucket: 'destinos-json', Key: 'procesado.json'};
  
    const client = new S3Client(clientParams);
    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(client, command, { expiresIn: expires});
    return url;
  }
  
}
