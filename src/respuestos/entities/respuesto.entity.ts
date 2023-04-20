import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Accesorio {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'numeric' })
  precio: number;

  @Column({ type: 'text' })
  proveedor: string;

  @Column({ type: 'text' })
  color: string;

  @Column({ type: 'text' })
  garantia: string;
  
  @Column({ type: 'text' })
  compatibles: string;

}
