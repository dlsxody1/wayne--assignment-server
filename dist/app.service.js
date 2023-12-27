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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
const post_repository_1 = require("./repository/post.repository");
const upload_response_1 = require("./response/upload.response");
const post_response_1 = require("./response/post.response");
let AppService = class AppService {
    constructor(postRepository) {
        this.postRepository = postRepository;
        this.s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_KEY,
        });
    }
    async getAllPosts() {
        const posts = await this.postRepository.getAllPosts();
        return posts.map((post) => post_response_1.default.fromPost(post));
    }
    async getPostById(id) {
        const post = await this.postRepository.getPostById(id);
        return post_response_1.default.fromPost(post);
    }
    async uploadImage({ image }) {
        const params = {
            Bucket: process.env.AWS_S3_BUCKET,
            Key: String(image.originalname),
            Body: image.buffer,
        };
        console.log(params);
        const response = await this.s3.upload(params).promise();
        return upload_response_1.default.fromUpload(response);
    }
    async uploadPost(request) {
        const post = await this.postRepository.createPost(request);
        return post_response_1.default.fromPost(post);
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [post_repository_1.PostRepository])
], AppService);
//# sourceMappingURL=app.service.js.map