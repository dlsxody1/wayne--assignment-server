import { BaseEntity } from 'typeorm';
export declare class Posts extends BaseEntity {
    id: number;
    createdAt: Date;
    image: string;
    title: string;
}
