import { Module } from '@nestjs/common';

import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { inventorysProviders } from './infrastructure/persistence/inventory.providers';

@Module({
  controllers: [
    InventoryController
  ],
  providers: [ 
    InventoryService,
    ...inventorysProviders
  ],
  exports: [
    ...inventorysProviders,
  ],
})
export class InventoryModule {}
