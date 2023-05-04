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
import { SizeService } from './size.service';
import { CreateShirtDto } from './dto/shirts.dto';

@Controller('size')
export class SizeController {
  constructor(private readonly shirtServiceRepo: SizeService) {}

  @Post()
  create(@Body() shirtDto: CreateShirtDto) {
    return this.shirtServiceRepo.create(shirtDto);
  }


  @Get()
  findAll() {
    return this.shirtServiceRepo.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.shirtServiceRepo.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.shirtServiceRepo.remove(id);
  }


  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatedShirtDto: CreateShirtDto,
  ) {
return this.shirtServiceRepo.update(id, updatedShirtDto);
  }
}