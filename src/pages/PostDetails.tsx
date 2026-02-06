import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Post } from "../types/post";
import { deletePost, getPostById } from "../api/posts.api";

const PostDetails = () => {
    const { id } = useParams<{ id: string }>();
    const Navigate = useNavigate();

    const [post, setPost] = useState<Post | null>(null);
    const [error, setError] = useState<string | null>(null);

    

    useEffect(() => {

        const fetchPostDetails = async () => {
        // Placeholder for fetching post details from API using the id
            if (!id) return;

            try {
                const response = await getPostById(Number(id));
                console.log("response post details: ", response.data);
                setPost(response.data);
            } catch (error) {
                setError("Failed to load post: " + error);
            }
        }

        fetchPostDetails();
    }, [id]);

    if (error) return <p>{error}</p>;

    const handleUpdatePost = (id: number) => {
        Navigate(`/update/${id}`);
    }

    const handleDeletePost = async (id: number) => {
        const confirm = window.confirm("Delete this post");
        if(!confirm) return;

        try {
            await deletePost(id);
            setPost(null);
            Navigate('/');
        } catch (error) {
            alert("Failed to delete the post: " + error);
        }
    }

    return ( 
        <div className="post-details">
            <h1>{post?.title}</h1>

            <p>{post?.body}</p>

            <div className="post-meta">
                <span>Views: {post?.views}</span>
                <span>User ID: {post?.userId}</span>
            </div>

            <div className="post-tags">
                {post?.tags.map(tag => (
                    <span key={tag}>#{tag} </span>
                ))}
            </div>

            <div className="put-del">
                <button onClick={() => handleUpdatePost(Number(id))}>Update</button>
                <button onClick={() => handleDeletePost(Number(id))}>Delete</button>
            </div>
        </div>
     );
}
 
export default PostDetails;