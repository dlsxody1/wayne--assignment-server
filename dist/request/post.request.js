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
class PostRequest {
}
exports.default = PostRequest;
__decorate([
    (0, api_decorator_1.ApiField)({
        type: String,
        description: '게시물 아이디',
        nullable: false,
        example: '랜덤 문자열',
    }),
    __metadata("design:type", String)
], PostRequest.prototype, "id", void 0);
__decorate([
    (0, api_decorator_1.ApiField)({
        type: Date,
        description: '작성 날짜',
        nullable: false,
        example: '2023/01/01',
    }),
    __metadata("design:type", Date)
], PostRequest.prototype, "createdAt", void 0);
__decorate([
    (0, api_decorator_1.ApiField)({
        type: String,
        description: '이미지 주소',
        nullable: false,
        example: 'http://mmmmm.....',
    }),
    __metadata("design:type", String)
], PostRequest.prototype, "image", void 0);
__decorate([
    (0, api_decorator_1.ApiField)({
        type: String,
        description: '게시물 제목',
        nullable: false,
        example: '이미지1',
    }),
    __metadata("design:type", String)
], PostRequest.prototype, "title", void 0);
//# sourceMappingURL=post.request.js.map