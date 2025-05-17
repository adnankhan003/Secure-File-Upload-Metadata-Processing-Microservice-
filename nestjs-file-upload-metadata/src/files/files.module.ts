import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { FileMetadata } from './fileMetadata.entity';
import { BullModule } from '@nestjs/bullmq';
import { FileProcessor } from './file.processor';

@Module({
  imports: [
    TypeOrmModule.forFeature([FileMetadata]),
    BullModule.registerQueue({
      name: 'file-processing',
    }),
  ],
  providers: [FilesService, FileProcessor],
  controllers: [FilesController],
})
export class FilesModule {}