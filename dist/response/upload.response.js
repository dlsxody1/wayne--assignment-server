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
const api_decorator_1 = require("../common/api.decorator");
class UploadResponse {
    static fromUpload(file) {
        const response = new UploadResponse();
        response.url = file.Location;
        response.fileName = file.key;
        return response;
    }
}
exports.default = UploadResponse;
__decorate([
    (0, api_decorator_1.ApiField)({
        type: String,
        description: '업로드 파일 URL',
        nullable: false,
        example: 'https://sample.domain.com/images/sample.png',
    }),
    __metadata("design:type", String)
], UploadResponse.prototype, "url", void 0);
__decorate([
    (0, api_decorator_1.ApiField)({
        type: String,
        description: '업로드 파일 제목',
        nullable: false,
        example: '인태.png',
    }),
    __metadata("design:type", String)
], UploadResponse.prototype, "fileName", void 0);
//# sourceMappingURL=upload.response.js.map