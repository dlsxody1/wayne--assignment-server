import { CustomRepository } from 'src/configs/typeorm.decorator';
import { Posts } from 'src/entity/post.entity';
import PostRequest from 'src/request/post.request';
import { Repository } from 'typeorm';

@CustomRepository(Posts)
export class PostRepository extends Repository<Posts> {
  async createPost(request: PostRequest): Promise<Posts> {
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

  async getPostById(id: number) {
    return await this.findOne({
      where: { id },
    });
  }
}
