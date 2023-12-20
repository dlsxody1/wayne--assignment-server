import { ApiNestedField } from 'src/common/api.decorator';

export default class PostsRequest {
  @ApiNestedField({
    type: [PostsRequest],
    description: '게시물 아이디',
    nullable: false,
    example: '랜덤 문자열',
  })
  posts: PostsRequest[];
}
