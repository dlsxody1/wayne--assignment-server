"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TypeOrmExModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmExModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_decorator_1 = require("./typeorm.decorator");
let TypeOrmExModule = TypeOrmExModule_1 = class TypeOrmExModule {
    static forCustomRepository(repositories) {
        const providers = [];
        for (const repository of repositories) {
            const entity = Reflect.getMetadata(typeorm_decorator_1.TYPEORM_EX_CUSTOM_REPOSITORY, repository);
            if (!entity) {
                continue;
            }
            providers.push({
                inject: [(0, typeorm_1.getDataSourceToken)()],
                provide: repository,
                useFactory: (dataSource) => {
                    const baseRepository = dataSource.getRepository(entity);
                    return new repository(baseRepository.target, baseRepository.manager, baseRepository.queryRunner);
                },
            });
        }
        return {
            exports: providers,
            module: TypeOrmExModule_1,
            providers,
        };
    }
};
exports.TypeOrmExModule = TypeOrmExModule;
exports.TypeOrmExModule = TypeOrmExModule = TypeOrmExModule_1 = __decorate([
    (0, common_1.Module)({})
], TypeOrmExModule);
//# sourceMappingURL=typeorm.module.js.map