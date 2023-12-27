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
class PostResponse {
    static fromPost(post) {
        const response = new PostResponse();
        response.id = post.id;
        response.createdAt = post.createdAt;
        response.image = post.image;
        response.title = post.title;
        return response;
    }
}
exports.default = PostResponse;
__decorate([
    (0, api_decorator_1.ApiField)({
        type: String,
        description: '게시물 id',
        nullable: false,
        example: 1,
    }),
    __metadata("design:type", Number)
], PostResponse.prototype, "id", void 0);
__decorate([
    (0, api_decorator_1.ApiField)({
        type: Date,
        description: '작성 날짜',
        nullable: false,
        example: '저 참여하고 싶어요.',
    }),
    __metadata("design:type", Date)
], PostResponse.prototype, "createdAt", void 0);
__decorate([
    (0, api_decorator_1.ApiField)({
        type: String,
        description: '이미지 주소',
        nullable: false,
        example: 11,
    }),
    __metadata("design:type", String)
], PostResponse.prototype, "image", void 0);
__decorate([
    (0, api_decorator_1.ApiField)({
        type: String,
        description: '게시물 제목',
        nullable: false,
        example: '이미지1',
    }),
    __metadata("design:type", String)
], PostResponse.prototype, "title", void 0);
//# sourceMappingURL=post.response.js.map