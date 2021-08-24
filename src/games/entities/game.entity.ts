import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'games' })
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nivel: number;

  @Column('int', { array: true })
  array: number[];

  @Column()
  position: number;

  @Column()
  done: boolean;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  user: string;
}
