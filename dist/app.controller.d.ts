import { AppService } from './app.service';
import * as Multer from 'multer';
import PostRequest from './request/post.request';
import PostResponse from './response/post.response';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllPosts(): Promise<PostResponse[]>;
    getPostById(id: number): Promise<PostResponse>;
    uploadPost(request: PostRequest): Promise<PostResponse>;
    uploadImage(image: Multer.file): Promise<import("./response/upload.response").default>;
}
