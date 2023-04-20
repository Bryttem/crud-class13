import { Body, Delete, Injectable, Param, ParseUUIDPipe, Patch } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Accesorio } from './entities/respuesto.entity';
import { CreateAccesorioDto } from './dto/respuesto.dto';

@Injectable()
export class RespuestService {
  constructor(
    @InjectRepository(Accesorio)
    private readonly respuestRepository: Repository<Accesorio>,
  ) {}

  //Metodo para crear un producto
  async create(pcDto: CreateAccesorioDto) {
    const respuest = this.respuestRepository.create(pcDto);
    await this.respuestRepository.save(respuest);

    return respuest;
  }

  //Metodo para visualizar todos los productos
  findAll() {
    return this.respuestRepository.find();
  }

  //Metodo para visualizar un producto especifico
  findOne(id: string) {
    return this.respuestRepository.findOneBy({ id });
  }

  //Remover un producto especifico
  async remove(id: string) {
    const respuest = await this.findOne(id);
    await this.respuestRepository.remove(respuest);
    return 'Repuesto eliminado correctamente';
  }

  //Actualizar un producto especifico
  async update(id: string, cambios: CreateAccesorioDto) {
    const findRespuest = await this.findOne(id);
    const updatedRespuest = await this.respuestRepository.merge(
      findRespuest,
      cambios,
    );

      return this.respuestRepository.save(updatedRespuest);
    
  }
}
