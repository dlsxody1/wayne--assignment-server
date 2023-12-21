import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Posts } from 'src/entity/post.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  database: 'wayne',
  password: 'rladlsxogkftndlTek!!',
  entities: [Posts],
  synchronize: true,
  timezone: '+09:00',
  logging: true,
};
