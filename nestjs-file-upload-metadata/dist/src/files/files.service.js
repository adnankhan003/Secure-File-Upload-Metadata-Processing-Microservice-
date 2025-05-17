"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const fileMetadata_entity_1 = require("./fileMetadata.entity");
const typeorm_2 = require("typeorm");
const bullmq_1 = require("@nestjs/bullmq");
const bullmq_2 = require("bullmq");
let FilesService = class FilesService {
    constructor(fileMetadataRepo, fileProcessingQueue) {
        this.fileMetadataRepo = fileMetadataRepo;
        this.fileProcessingQueue = fileProcessingQueue;
    }
    async saveFileMetadata(filename, mimetype, size) {
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
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(fileMetadata_entity_1.FileMetadata)),
    __param(1, (0, bullmq_1.InjectQueue)('file-processing')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        bullmq_2.Queue])
], FilesService);
//# sourceMappingURL=files.service.js.map