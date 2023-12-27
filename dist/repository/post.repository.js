"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
const typeorm_decorator_1 = require("../configs/typeorm.decorator");
const post_entity_1 = require("../entity/post.entity");
const typeorm_1 = require("typeorm");
let PostRepository = class PostRepository extends typeorm_1.Repository {
    async createPost(request) {
        const post = await this.create({
            image: request.image,
            title: request.title,
        });
        await this.save(post);
        return post;
    }
    async getAllPosts() {
        return await this.find();
    }
    async getPostById(id) {
        return await this.findOne({
            where: { id },
        });
    }
};
exports.PostRepository = PostRepository;
exports.PostRepository = PostRepository = __decorate([
    (0, typeorm_decorator_1.CustomRepository)(post_entity_1.Posts)
], PostRepository);
//# sourceMappingURL=post.repository.js.map