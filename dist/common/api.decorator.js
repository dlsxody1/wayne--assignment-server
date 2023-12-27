"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheEgoApiEnums = exports.ApiEnumField = exports.RestApiField = exports.ApiNestedField = exports.ApiField = exports.getReturnTypeFunc = exports.DuAllApi = exports.DeleteApi = exports.PatchApi = exports.PutApi = exports.PostApi = exports.GetApi = void 0;
const common_1 = require("@nestjs/common");
const dist_1 = require("@nestjs/passport/dist");
const swagger_1 = require("@nestjs/swagger");
function combinePropertyDecorator(...decorators) {
    return function (target, key) {
        let decorator;
        while ((decorator = decorators.shift()))
            decorator(target, key);
    };
}
function combineMethodDecorator(decorators) {
    return function (target, key, descriptor) {
        let decorator;
        while ((decorator = decorators.shift()))
            decorator(target, key, descriptor);
    };
}
function getApiDecorator(apiMethodType, returnTypeFunc, options) {
    return combineMethodDecorator([
        ...(options.auth ? [(0, swagger_1.ApiBearerAuth)('access-token')] : []),
        apiMethodType(options.path),
        (0, swagger_1.ApiOperation)({
            summary: options.description,
            description: options.description,
        }),
        (0, swagger_1.ApiCreatedResponse)({
            description: options.description,
            type: returnTypeFunc(),
            status: common_1.HttpStatus.OK,
        }),
        options.auth === true ? (0, common_1.UseGuards)((0, dist_1.AuthGuard)()) : null,
        (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    ]);
}
const GetApi = function (returnTypeFunc, options) {
    return getApiDecorator(common_1.Get, returnTypeFunc, options);
};
exports.GetApi = GetApi;
const PostApi = function (returnTypeFunc, options) {
    return getApiDecorator(common_1.Post, returnTypeFunc, options);
};
exports.PostApi = PostApi;
const PutApi = function (returnTypeFunc, options) {
    return getApiDecorator(common_1.Put, returnTypeFunc, options);
};
exports.PutApi = PutApi;
const PatchApi = function (returnTypeFunc, options) {
    return getApiDecorator(common_1.Patch, returnTypeFunc, options);
};
exports.PatchApi = PatchApi;
const DeleteApi = function (returnTypeFunc, options) {
    return getApiDecorator(common_1.Delete, returnTypeFunc, options);
};
exports.DeleteApi = DeleteApi;
const DuAllApi = function (returnTypeFunc, options) {
    return getApiDecorator(common_1.All, returnTypeFunc, options);
};
exports.DuAllApi = DuAllApi;
const getReturnTypeFunc = (returnType) => () => returnType;
exports.getReturnTypeFunc = getReturnTypeFunc;
const ApiField = function (options) {
    return combinePropertyDecorator((0, swagger_1.ApiProperty)({
        description: options.description,
        required: !options.nullable,
        example: options.example,
    }));
};
exports.ApiField = ApiField;
const ApiNestedField = function (options) {
    return combinePropertyDecorator((0, swagger_1.ApiProperty)({
        type: options.type,
        description: options.description,
        required: options ? !options.nullable : undefined,
        example: options.example,
    }));
};
exports.ApiNestedField = ApiNestedField;
const RestApiField = function (options) {
    return (0, swagger_1.ApiProperty)({
        description: options.description,
        required: !options.nullable,
        example: options.example,
    });
};
exports.RestApiField = RestApiField;
const ApiEnumField = function (options) {
    return combinePropertyDecorator((0, swagger_1.ApiProperty)({
        type: options.type,
        enum: options.type,
        enumName: TheEgoApiEnums.findName(options.type),
        description: options.description,
        required: options ? !options.nullable : undefined,
        example: options.example,
    }));
};
exports.ApiEnumField = ApiEnumField;
class TheEgoApiEnums {
    static register(name, enumType) {
        this.enums[name] = enumType;
    }
    static findEnum(name) {
        return this.enums[name];
    }
    static findName(enumType) {
        return Object.keys(this.enums).find((name) => this.enums[name] == enumType);
    }
}
exports.TheEgoApiEnums = TheEgoApiEnums;
TheEgoApiEnums.enums = {};
//# sourceMappingURL=api.decorator.js.map