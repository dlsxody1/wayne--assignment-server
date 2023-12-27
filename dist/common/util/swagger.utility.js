"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(app) {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('DevMet')
        .setDescription('DevMet API 명세')
        .setVersion('1.0')
        .addBearerAuth({ type: 'http', scheme: 'bearer', name: 'JWT', in: 'header' }, 'access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api-docs', app, document);
}
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.utility.js.map