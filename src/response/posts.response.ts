import { ApiNestedField } from 'src/common/api.decorator';
import PostResponse from './post.response';

export default class PostsResponse {
  @ApiNestedField({
    type: [PostResponse],
    description: '게시물들 배열',
    nullable: false,
    example: [
      { id: 'adeee', image: '11111', createdAt: '2023-09-01', title: '제목' },
    ],
  })
  posts: PostResponse[];
}
