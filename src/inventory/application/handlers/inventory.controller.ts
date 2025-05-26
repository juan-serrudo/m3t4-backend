import { Body, Controller, Delete, Get, Param, Post, Put, Version } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { TokenDecorator } from 'src/shared/decorators/jwt.decorator';
import { ResponseDTO } from 'src/shared/dto/response.dto';

import { CreateInventoryDto, UpdateInventoryDto } from '../dtos/inventory.dto';
import { InventoryService } from '../../domain/events/inventory.service';

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

  @Version('1')
  @Post('/')
  @ApiOperation({
    summary: 'Registrar en la base de datos.',
  })
  @ApiBearerAuth()
  async save(
    @TokenDecorator() tokenValid: ResponseDTO,
    @Body() value: CreateInventoryDto
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.inventoryService.save(value);
    }

    return response;
  }

  @Version('1')
  @Put('/:id')
  @ApiOperation({
    summary: 'Actualizar la base de datos.',
  })
  @ApiBearerAuth()
  async update(
    @TokenDecorator() tokenValid: ResponseDTO,
    @Param('id') id: number,
    @Body() value: UpdateInventoryDto
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.inventoryService.update(id, value);
    }

    return response;
  }

  @Version('1')
  @Delete('/:id')
  @ApiOperation({
    summary: 'Eliminar de la base de datos.',
  })
  @ApiBearerAuth()
  async delete(
    @TokenDecorator() tokenValid: ResponseDTO,
    @Param('id') id: number
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.inventoryService.delete(id);
    }

    return response;
  }
}
