"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
const post_entity_1 = require("../entity/post.entity");
exports.typeORMConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    database: 'wayne',
    password: 'rladlsxogkftndlTek!!',
    entities: [post_entity_1.Posts],
    synchronize: true,
    timezone: '+09:00',
    logging: true,
};
//# sourceMappingURL=typeorm.config.js.map