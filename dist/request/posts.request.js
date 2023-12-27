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
class PostsRequest {
}
exports.default = PostsRequest;
__decorate([
    (0, api_decorator_1.ApiNestedField)({
        type: [PostsRequest],
        description: '게시물 아이디',
        nullable: false,
        example: '랜덤 문자열',
    }),
    __metadata("design:type", Array)
], PostsRequest.prototype, "posts", void 0);
//# sourceMappingURL=posts.request.js.map