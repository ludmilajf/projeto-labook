import {PostModel} from "../types"

export interface SignupInputDTO {
    name: unknown,
    email: unknown,
    password: unknown
}

export interface SignupOutputDTO {
    token: string
}


export interface LoginInputDTO {
    email: unknown,
    password: unknown
}

export interface LoginOutputDTO {
    token: string
}


export interface GetPostsInputDTO {
    token: string | undefined
}

export  type GetPostsOutputDTO = PostModel[]


export interface CreatePostsInputDTO {
    token: string | undefined
    content: string
}

export interface EditPostsInputDTO {
    idToEdit: string,
    token: string | undefined,
    content: unknown
}

export interface DeletePostsInputDTO {
    idToDelete: string,
    token: string | undefined
}

export interface LikeDislikePostsInputDTO {
    idToDelete: string,
    token: string | undefined
    like: unknown
}