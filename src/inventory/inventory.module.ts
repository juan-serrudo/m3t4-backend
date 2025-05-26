import { Module } from '@nestjs/common';

import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { inventorysProviders } from './infrastructure/persistence/inventory.providers';
import { databaseProviders } from 'src/shared/providers/database.providers';

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
