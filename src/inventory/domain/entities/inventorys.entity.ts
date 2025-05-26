import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, Unique, OneToMany } from 'typeorm';

@Entity()
@Unique(['name'])
export class Inventorys {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @VersionColumn()
  version: number

  @Column({ type: 'int2', default: 1 })
  state: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 200 })
  description: string;
}
