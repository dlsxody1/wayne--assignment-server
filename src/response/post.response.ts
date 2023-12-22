import { ApiField } from 'src/common/api.decorator';
import { Posts } from 'src/entity/post.entity';

export default class PostResponse {
  @ApiField({
    type: String,
    description: '게시물 id',
    nullable: false,
    example: 1,
  })
  id: number;

  @ApiField({
    type: Date,
    description: '작성 날짜',
    nullable: false,
    example: '저 참여하고 싶어요.',
  })
  createdAt: Date;

  @ApiField({
    type: String,
    description: '이미지 주소',
    nullable: false,
    example: 11,
  })
  image: string;

  @ApiField({
    type: String,
    description: '게시물 제목',
    nullable: false,
    example: '이미지1',
  })
  title: string;

  static fromPost(post: Posts): PostResponse {
    const response = new PostResponse();
    response.id = post.id;
    response.createdAt = post.createdAt;
    response.image = post.image;
    response.title = post.title;
    return response;
  }
}
