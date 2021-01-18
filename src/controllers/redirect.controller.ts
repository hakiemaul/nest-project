import { Controller, Get, Redirect, Query } from '@nestjs/common';
import { IRedirect, RedirectService } from 'src/providers/redirect.service';

@Controller('redirect')
export class RedirectController {
  constructor(private readonly redirectService: RedirectService) {}

  @Get('docs')
  @Redirect()
  redirectToDocs(@Query('version') version): IRedirect {
    return this.redirectService.getDocsUrl(version);
  }
}
