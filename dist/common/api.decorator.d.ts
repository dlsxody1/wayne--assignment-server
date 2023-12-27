export type Map<T> = {
    [key: string]: T;
};
export type Optional<T> = T | null | undefined;
export type Nullable<T> = T | null;
interface IApiOptions {
    path: string | string[];
    description?: string;
    auth?: boolean;
}
interface IApiPropertyOptions {
    type: any;
    description?: string;
    nullable?: boolean;
    defaultValue?: any;
    example?: any;
}
export declare const GetApi: (returnTypeFunc: (returns?: void) => any, options: IApiOptions) => MethodDecorator;
export declare const PostApi: (returnTypeFunc: (returns?: void) => any, options: IApiOptions) => MethodDecorator;
export declare const PutApi: (returnTypeFunc: (returns?: void) => any, options: IApiOptions) => MethodDecorator;
export declare const PatchApi: (returnTypeFunc: (returns?: void) => any, options: IApiOptions) => MethodDecorator;
export declare const DeleteApi: (returnTypeFunc: (returns?: void) => any, options: IApiOptions) => MethodDecorator;
export declare const DuAllApi: (returnTypeFunc: (returns?: void) => any, options: IApiOptions) => MethodDecorator;
export declare const getReturnTypeFunc: (returnType: any) => () => any;
export declare const ApiField: (options: IApiPropertyOptions) => PropertyDecorator;
export declare const ApiNestedField: (options: IApiPropertyOptions) => PropertyDecorator;
export declare const RestApiField: (options: IApiPropertyOptions) => PropertyDecorator;
export declare const ApiEnumField: (options: IApiPropertyOptions) => PropertyDecorator;
export declare class TheEgoApiEnums {
    private static enums;
    static register(name: string, enumType: any): void;
    static findEnum(name: string): any | undefined;
    static findName(enumType: any): string | undefined;
}
export {};
