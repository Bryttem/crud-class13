import { Body, Delete, Injectable, Param, ParseUUIDPipe, Patch } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pc } from './entities/computer.entity';
import { CreatePcDto } from './dto/computer.dto';

@Injectable()
export class PcService {
  constructor(
    @InjectRepository(Pc)
    private readonly pcRepository: Repository<Pc>,
  ) {}

  //Metodo para crear un producto
  async create(pcDto: CreatePcDto) {
    const pc = this.pcRepository.create(pcDto);
    await this.pcRepository.save(pc);

    return pc;
  }

  //Metodo para visualizar todos los productos
  findAll() {
    return this.pcRepository.find();
  }

  //Metodo para visualizar un producto especifico
  findOne(id: string) {
    return this.pcRepository.findOneBy({ id });
  }

  //Remover un producto especifico
  async remove(id: string) {
    const pc = await this.findOne(id);
    await this.pcRepository.remove(pc);
    return 'Pc eliminada correctamente';
  }

  //Actualizar un producto especifico
  async update(id: string, cambios: CreatePcDto) {
    const findPc = await this.findOne(id);
    const updatedPc = await this.pcRepository.merge(
      findPc,
      cambios,
    );

      return this.pcRepository.save(updatedPc);
    
  }
}
