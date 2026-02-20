export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  }
  views: number;
}

export interface PostsResponse  extends StrictPost{  // Note that an interface can extend a type
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export type PartialPost = Partial<Post>; // Makes all properties optional.

export type StrictPost = Required<Post>  // Makes all properties required. -> Strong Validation

export type SpecialPost = Pick<Post, "id" | "title" | "body">

export type PostWithoutUserId = Omit<Post, "userId">

type Role = "admin" | "user" | "guest";  

export type ExcluseRole = Exclude<Role, "admin"> // You can prevent unsafe roles from reaching certain logic.


// Generic Constraint test:
export function getId<T extends {id: string | number}>(obj: T) {
  return obj.id;
};
