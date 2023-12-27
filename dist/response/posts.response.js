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
const post_response_1 = require("./post.response");
class PostsResponse {
}
exports.default = PostsResponse;
__decorate([
    (0, api_decorator_1.ApiNestedField)({
        type: [post_response_1.default],
        description: '게시물들 배열',
        nullable: false,
        example: [
            { id: 'adeee', image: '11111', createdAt: '2023-09-01', title: '제목' },
        ],
    }),
    __metadata("design:type", Array)
], PostsResponse.prototype, "posts", void 0);
//# sourceMappingURL=posts.response.js.map