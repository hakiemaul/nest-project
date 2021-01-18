import { Injectable } from '@nestjs/common';

export interface IRedirect {
    url: string;
};

@Injectable()
export class RedirectService {
  getDocsUrl(version?: string): IRedirect {
    if (version && version === '5') {
        return { url: 'https://docs.nestjs.com/v5/' };
      }
  
      return { url: 'https://developers.xendit.co/api-reference/' };
  }
}
