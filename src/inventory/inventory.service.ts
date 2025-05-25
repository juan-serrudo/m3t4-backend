import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ResponseDTO } from 'src/shared/dto/response.dto';

import { Inventorys } from './domain/entities/inventorys.entity';

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

}
