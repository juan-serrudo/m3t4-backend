import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { InventoryService } from './inventory.service';

@ApiTags('INICIO')
@Controller()
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}
}
