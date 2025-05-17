import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class FileMetadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  mimetype: string;

  @Column()
  size: number;

  @CreateDateColumn()
  uploadedAt: Date;
}