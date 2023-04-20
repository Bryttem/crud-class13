import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateAccesorioDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  name: string;

  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @IsNotEmpty()
  @IsString()
  proveedor: string;

}
