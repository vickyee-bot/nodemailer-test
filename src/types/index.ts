export type User = {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
};

export type Post = {
    id: string;
    title: string;
    content: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
};

export interface CreateUserInput {
    name: string;
    email: string;
}

export interface CreatePostInput {
    title: string;
    content: string;
    authorId: string;
}