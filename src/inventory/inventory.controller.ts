import { Controller, Get, Version } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { TokenDecorator } from 'src/shared/decorators/jwt.decorator';
import { ResponseDTO } from 'src/shared/dto/response.dto';

import { InventoryService } from './inventory.service';

@ApiTags('INVENTARIO')
@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Version('1')
  @Get('/')
  @ApiOperation({
    summary: 'Obtiene todos los valores de la tabla.',
  })
  @ApiBearerAuth()
  async findAll(
      @TokenDecorator() tokenValid: ResponseDTO,
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.inventoryService.findAll();
    }

    return response;
  }
}
