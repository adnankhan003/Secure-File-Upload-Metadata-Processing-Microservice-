import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileMetadata } from './fileMetadata.entity';
import { Repository } from 'typeorm';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileMetadata)
    private fileMetadataRepo: Repository<FileMetadata>,
    @InjectQueue('file-processing')
    private fileProcessingQueue: Queue,
  ) {}

  async saveFileMetadata(filename: string, mimetype: string, size: number) {
    const fileMeta = this.fileMetadataRepo.create({ filename, mimetype, size });
    const saved = await this.fileMetadataRepo.save(fileMeta);
    await this.fileProcessingQueue.add('process-file', {
      fileId: saved.id,
      filename,
      mimetype,
      size,
    });
    return saved;
  }
}