import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as Multer from 'multer';

@Entity()
export class Posts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Column({ type: Multer.file, nullable: false })
  image: Multer.file;

  @Column({ type: String, nullable: false })
  title: string;
}
