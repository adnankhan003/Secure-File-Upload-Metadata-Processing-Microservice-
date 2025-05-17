import { FileMetadata } from './fileMetadata.entity';
import { Repository } from 'typeorm';
import { Queue } from 'bullmq';
export declare class FilesService {
    private fileMetadataRepo;
    private fileProcessingQueue;
    constructor(fileMetadataRepo: Repository<FileMetadata>, fileProcessingQueue: Queue);
    saveFileMetadata(filename: string, mimetype: string, size: number): Promise<FileMetadata>;
}
