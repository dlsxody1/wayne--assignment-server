import { Posts } from 'src/entity/post.entity';
import PostRequest from 'src/request/post.request';
import { Repository } from 'typeorm';
export declare class PostRepository extends Repository<Posts> {
    createPost(request: PostRequest): Promise<Posts>;
    getAllPosts(): Promise<Posts[]>;
    getPostById(id: number): Promise<Posts>;
}
