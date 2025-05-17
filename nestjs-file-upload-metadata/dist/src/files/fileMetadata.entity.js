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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileMetadata = void 0;
const typeorm_1 = require("typeorm");
let FileMetadata = class FileMetadata {
};
exports.FileMetadata = FileMetadata;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FileMetadata.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FileMetadata.prototype, "filename", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FileMetadata.prototype, "mimetype", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], FileMetadata.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FileMetadata.prototype, "uploadedAt", void 0);
exports.FileMetadata = FileMetadata = __decorate([
    (0, typeorm_1.Entity)()
], FileMetadata);
//# sourceMappingURL=fileMetadata.entity.js.map