import "./module-alias";

import { Module } from '@nestjs/common';

import * as controllers from 'src/controllers';
import * as providers from 'src/providers';

@Module({
  imports: [],
  controllers: Object.values(controllers),
  providers: Object.values(providers),
})
export class AppModule {}
