import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('file-queue')
export class FileProcessor extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    console.log('Processing job:', job.name, job.data);
    // handle metadata processing here
    return {};
  }
}
