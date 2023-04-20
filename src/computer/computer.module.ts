import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pc } from './entities/computer.entity';
import { PcController } from './computer.controller';
import { PcService } from './computer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pc])],
  controllers: [PcController],
  providers: [PcService],
})
export class ComputerModule {}
