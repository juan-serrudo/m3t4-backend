import { Module } from '@nestjs/common';

import { databaseProviders } from 'src/shared/providers/database.providers';

import { InventoryController } from './application/handlers/inventory.controller';
import { inventorysProviders } from './infrastructure/persistence/inventory.providers';
import { InventoryService } from './domain/events/inventory.service';

@Module({
  controllers: [
    InventoryController
  ],
  providers: [
    InventoryService,
    ...databaseProviders,
    ...inventorysProviders
  ],
  exports: [
    ...databaseProviders,
    ...inventorysProviders,
  ],
})
export class InventoryModule {}
