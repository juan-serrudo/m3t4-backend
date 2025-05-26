import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ResponseDTO } from 'src/shared/dto/response.dto';

import { Inventorys } from './domain/entities/inventorys.entity';
import { CreateInventoryDto, UpdateInventoryDto } from './application/dtos/inventory.dto';

@Injectable()
export class InventoryService {
  constructor(
    @Inject('INVENTORYS_REPOSITORY')
    private inventorysRepository: Repository<Inventorys>,
  ) {}

  async findAll(): Promise<ResponseDTO> {
    // Inicio
    let response: ResponseDTO = {
      error: true,
      message: 'Error en el sericio',
      response: [],
      status: 422
    }

    // Proceso
    try {
      response.error = false;
      response.message = 'La consulta a la base de datos se realizó correctamente.';
      response.response = await this.inventorysRepository.find();
      response.status = 200;

    } catch (error) {
      response.error = true;
      response.message = 'Error en la consulta.';
      response.response = error;
      response.status = 502;
    }

    //Fin
    return response;
  }

  async save( size: CreateInventoryDto ): Promise<ResponseDTO> {
    // Inicio
    let response: ResponseDTO = {
      error: true,
      message: 'Error en el sericio',
      response: [],
      status: 422
    }

    // Proceso
    try {
      response.error = false;
      response.message = 'Se registro en la base de datos.';
      response.response = await this.inventorysRepository.save(size);
      response.status = 200;

    } catch (error) {
      response.error = true;
      response.message = 'Error al registrar.';
      response.response = error;
      response.status = 502;
    }

    //Fin
    return response;
  }

  async update( id: number, size: UpdateInventoryDto ): Promise<ResponseDTO> {
    // Inicio
    let response: ResponseDTO = {
      error: true,
      message: 'Error en el sericio',
      response: [],
      status: 422
    }

    // Proceso
    try {
      response.error = false;
      response.message = 'Se actualizo la base de datos.';
      response.response = await this.inventorysRepository.update(id, size);
      response.status = 200;

    } catch (error) {
      response.error = true;
      response.message = 'Error al actualizar.';
      response.response = error;
      response.status = 502;
    }

    //Fin
    return response;
  }

  async delete( id: number ): Promise<ResponseDTO> {
    // Inicio
    let response: ResponseDTO = {
      error: true,
      message: 'Error en el sericio',
      response: [],
      status: 422
    }

    // Proceso
    try {
      response.error = false;
      response.message = 'Se elimino de la base de datos.';
      response.response = await this.inventorysRepository.delete(id);
      response.status = 200;

    } catch (error) {
      response.error = true;
      response.message = 'Error al eliminar.';
      response.response = error;
      response.status = 502;
    }

    //Fin
    return response;
  }

}
