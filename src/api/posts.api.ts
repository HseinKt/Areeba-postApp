import type { Post, PostsResponse } from "../types/post";
import api from "./axios"


export const getPosts = () => api.get<PostsResponse>('/posts');

export const getPostById = (id: number) => api.get<Post>(`/posts/${id}`);

export const createPost = (postData: Partial<Post>) => api.post<Post>('/posts/add', postData);

export const updatePost = (id: number, postData: Partial<Post>) => api.put<Post>(`/posts/${id}`, postData);

export const deletePost = (id: number) => api.delete(`/posts/${id}`);

