import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pc {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  modelo: string;

  @Column({ type: 'numeric' })
  precio: number;

  @Column({ type: 'numeric' })
  almacenamiento: number;

  @Column({ type: 'text' })
  procesador: string;

  @Column({ type: 'text' })
  color: string;

  @Column({ type: 'text' })
  grafica: string;

  @Column({ type: 'text' })
  description: string;

}
