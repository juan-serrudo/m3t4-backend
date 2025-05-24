import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './shared/configurations/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './shared/providers/database.providers';

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
