import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { Users } from '../../domain/entities/users.entity';
import { ResponseDTO } from 'src/shared/dto/response.dto';
import { signJWTHelperV1 } from 'src/shared/helpers/jwt.helper';
import { CreateUserDto, LoginDto, UpdateUserDto } from '../dtos/user.dto';

@Injectable()
export class SecurityService {

  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<Users>,
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
      response.response = await this.usersRepository.find({});
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

  async save( value: CreateUserDto ): Promise<ResponseDTO> {
    // Inicio
    let response: ResponseDTO = {
      error: true,
      message: 'Error en el sericio',
      response: [],
      status: 422
    }

    // Proceso
    try {
      let user = await this.usersRepository.find({
        where: {
          user: value.user,
        }
      });

      if ( user.length > 0 ) {
        response.message = 'El usuario ya existe.';
        response.response = user[0].user;
        response.status = 409;
      } else {
        value.password = bcrypt.hashSync(value.password, 10);

        response.error = false;
        response.message = 'Se registro en la base de datos.';
        response.response = await this.usersRepository.save(value);
        response.status = 200;
      }
    } catch (error) {
      response.error = true;
      response.message = 'Error al registrar.';
      response.response = error;
      response.status = 502;
    }

    //Fin
    return response;
  }

  async update( id: number, value: UpdateUserDto ): Promise<ResponseDTO> {
    // Inicio
    let response: ResponseDTO = {
      error: true,
      message: 'Error en el sericio',
      response: [],
      status: 422
    }

    // Proceso
    try {
      value.password = bcrypt.hashSync(value.password, 10);

      response.error = false;
      response.message = 'Se actualizo la base de datos.';
      response.response = await this.usersRepository.update(id, value);
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
      response.response = await this.usersRepository.delete(id);
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

  async login( value: LoginDto ): Promise<ResponseDTO> {
    // Inicio
    let response: ResponseDTO = {
      error: true,
      message: 'Error en el sericio',
      response: [],
      status: 422
    }

    // Proceso
    try {
      let user = await this.usersRepository.find({
        where: {
          user: value.user,
        }
      });

      if ( user.length > 0 ) {
        if ( bcrypt.compareSync(value.password, user[0].password) ) {
          let data = {
            user: user[0].user,
            role: user[0].role,
          }

          response = await signJWTHelperV1(data);
        } else {
          response.message = 'Usuario o contraseña incorrecta.';
          response.status = 401;
        }
      } else {
        response.message = 'Usuario o contraseña incorrecta.';
        response.status = 401;
      }
    } catch (error) {
      response.error = true;
      response.message = 'Error al registrar.';
      response.response = error;
      response.status = 502;
    }

    //Fin
    return response;
  }
}
