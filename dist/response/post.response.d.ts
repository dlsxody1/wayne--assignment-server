import { Posts } from 'src/entity/post.entity';
export default class PostResponse {
    id: number;
    createdAt: Date;
    image: string;
    title: string;
    static fromPost(post: Posts): PostResponse;
}
