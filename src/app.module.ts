import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './shared/configurations/configuration';

import { AppController } from './shared/app.controller';
import { AppService } from './shared/app.service';

import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      expandVariables: true,
      isGlobal: true
    }),
    InventoryModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
  exports: [
  ],
})
export class AppModule {}
