import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { PcService } from './computer.service';
import { CreatePcDto } from './dto/computer.dto';

@Controller('pc')
export class PcController {
  constructor(private readonly pcServiceRepo: PcService) {}

  @Post()
  create(@Body() pcDto: CreatePcDto) {
    return this.pcServiceRepo.create(pcDto);
  }


  @Get()
  findAll() {
    return this.pcServiceRepo.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.pcServiceRepo.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.pcServiceRepo.remove(id);
  }


  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatedPcDto: CreatePcDto,
  ) {
return this.pcServiceRepo.update(id, updatedPcDto);
  }
}