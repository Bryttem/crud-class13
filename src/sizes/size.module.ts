import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSize } from './entities/productSize.entity';
import { SizeController } from './size.controller';
import { SizeService } from './size.service';
import { Shirts } from './entities/shirts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shirts, ProductSize])],
  controllers: [SizeController],
  providers: [SizeService],
})
export class SizeModule {}
