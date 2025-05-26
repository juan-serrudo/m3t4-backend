import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateInventoryDto {
  @Expose()
  @IsString({ message: 'El campo "Nombre" debe ser un texto válido.' })
  @MaxLength(100, { message: 'El campo "Nombre" no puede tener más de 100 caracteres.' })
  @MinLength(1, { message: 'El campo "Nombre" debe tener al menos 1 carácter.' })
  @IsNotEmpty({ message: 'El campo "Nombre" es obligatorio.' })
  @ApiProperty({
    description: 'Nombre del activo',
    example: 'Servidor',
    required: true,
  })
  name: string;

  @Expose()
  @IsString({ message: 'El campo "Descripción" debe ser un texto válido.' })
  @MaxLength(200, { message: 'El campo "Descripción" no puede tener más de 200 caracteres.' })
  @MinLength(1, { message: 'El campo "Descripción" debe tener al menos 1 carácter.' })
  @IsNotEmpty({ message: 'El campo "Descripción" es obligatorio.' })
  @ApiProperty({
    description: 'Descripción del activo',
    example: 'Marca: IBM',
    required: true,
  })
  description: string;
}

export class UpdateInventoryDto extends CreateInventoryDto {}
