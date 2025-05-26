import { Body, Controller, Delete, Get, Param, Patch, Post, Version } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateUserDto, LoginDto, UpdateUserDto } from './application/dtos/user.dto';
import { ResponseDTO } from 'src/shared/dto/response.dto';
import { TokenDecorator } from 'src/shared/decorators/jwt.decorator';

import { SecurityService } from './security.service';

@ApiTags('SEGURIDAD')
@Controller('security')
export class SecurityController {
  constructor(private readonly securityService: SecurityService) {}

  @Version('1')
  @Get('/')
  @ApiOperation({
    summary: 'Obtiene todos los valores de la tabla.',
  })
  @ApiBearerAuth()
  async findAll(
    @TokenDecorator() tokenValid: ResponseDTO
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.securityService.findAll();
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
    @Body() value: CreateUserDto
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.securityService.save(value);
    }

    return response;
  }

  @Version('1')
  @Patch('/:id')
  @ApiOperation({
    summary: 'Actualizar la base de datos.',
  })
  @ApiBearerAuth()
  async update(
    @TokenDecorator() tokenValid: ResponseDTO,
    @Param('id') id: number,
    @Body() value: UpdateUserDto
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.securityService.update(id, value);
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
      response = await this.securityService.delete(id);
    }

    return response;
  }

  @Version('1')
  @Post('/login')
  @ApiOperation({
    summary: 'Obtiene el token JWT.',
  })
  async login(@Body() value: LoginDto): Promise<ResponseDTO> {
    return this.securityService.login(value);
  }
}