import { ApiField } from 'src/common/api.decorator';

export default class PostResponse {
  @ApiField({
    type: String,
    description: '게시물 아이디',
    nullable: false,
    example: '랜덤 문자열',
  })
  id: string;

  @ApiField({
    type: Date,
    description: '작성 날짜',
    nullable: false,
    example: '저 참여하고 싶어요.',
  })
  createdAt: string;

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
}
