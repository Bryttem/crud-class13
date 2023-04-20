import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accesorio } from './entities/respuesto.entity';
import { RespuestController } from './respuesto.controller';
import { RespuestService } from './respuesto.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accesorio])],
  controllers: [RespuestController],
  providers: [RespuestService],
})
export class RespuestModule {}
