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
  import { RespuestService } from './respuesto.service';
  import { CreateAccesorioDto } from './dto/respuesto.dto';
  
  @Controller('repuesto')
  export class RespuestController {
    constructor(private readonly respuestServiceRepo: RespuestService) {}
  
    @Post()
    create(@Body() respuestDto: CreateAccesorioDto) {
      return this.respuestServiceRepo.create(respuestDto);
    }
  
  
    @Get()
    findAll() {
      return this.respuestServiceRepo.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
      return this.respuestServiceRepo.findOne(id);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
      return this.respuestServiceRepo.remove(id);
    }
  
  
    @Patch(':id')
    update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() updatedRespuestDto: CreateAccesorioDto,
    ) {
  return this.respuestServiceRepo.update(id, updatedRespuestDto);
    }
  }