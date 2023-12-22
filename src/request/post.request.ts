import { ApiField } from 'src/common/api.decorator';

export default class PostRequest {
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
    example: '2023/01/01',
  })
  createdAt: Date;

  @ApiField({
    type: String,
    description: '이미지 주소',
    nullable: false,
    example: 'http://mmmmm.....',
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
