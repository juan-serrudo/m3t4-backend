import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './shared/configurations/configuration';
import { databaseProviders } from './shared/providers/database.providers';

import { AppController } from './shared/app.controller';
import { AppService } from './shared/app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      expandVariables: true,
      isGlobal: true
    }),
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
    ...databaseProviders
  ],
  exports: [
    ...databaseProviders,
  ],
})
export class AppModule {}
