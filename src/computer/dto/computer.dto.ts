import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreatePcDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  modelo: string;

  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @IsNotEmpty()
  @IsNumber()
  almacenamiento: number;

}
