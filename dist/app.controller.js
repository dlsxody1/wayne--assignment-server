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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const api_decorator_1 = require("./common/api.decorator");
const Multer = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const post_entity_1 = require("./entity/post.entity");
const post_request_1 = require("./request/post.request");
const post_response_1 = require("./response/post.response");
const posts_response_1 = require("./response/posts.response");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getAllPosts() {
        return this.appService.getAllPosts();
    }
    async getPostById(id) {
        return this.appService.getPostById(id);
    }
    async uploadPost(request) {
        return this.appService.uploadPost(request);
    }
    async uploadImage(image) {
        const result = await this.appService.uploadImage({
            image,
        });
        return result;
    }
};
exports.AppController = AppController;
__decorate([
    (0, api_decorator_1.GetApi)(() => posts_response_1.default, {
        path: '/',
        description: '전체 게시물 조회',
        auth: false,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAllPosts", null);
__decorate([
    (0, api_decorator_1.GetApi)(() => post_response_1.default, {
        path: 'detail/:id',
        description: 'id에 해당하는 게시물',
        auth: false,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getPostById", null);
__decorate([
    (0, api_decorator_1.PostApi)(() => post_entity_1.Posts, {
        path: '/post',
        description: '게시물 업로드',
        auth: false,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_request_1.default]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "uploadPost", null);
__decorate([
    (0, api_decorator_1.PostApi)(() => { }, {
        path: '/upload',
        description: '파일 업로드',
        auth: false,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof Multer !== "undefined" && Multer.file) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "uploadImage", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map