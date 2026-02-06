import { useState } from "react";
import { useParams } from "react-router-dom";
// import type { Post } from "../types/post";
import { updatePost } from "../api/posts.api";

const PostUpdate = () => {
    // const [editingPostId, setEditingPostId] = useState<number | null>(null);
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState("");
    const { id } = useParams<{ id: string }>();

    // const startEditingPost = (post: Post) => {
    //     setEditingPostId(post.id);
    //     setEditTitle(post.title);
    //     setEditBody(post.body);
    // }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const body = {title: editTitle, body: editBody};
            const response = await updatePost(Number(id), body);
            console.log("Post updated: ", response.data);
            alert("Post updated successfully");
        } catch (error) {
            console.log("Failed to update post: ", error);
            
        }
    }
    return ( 
        <div>
            <h1>Post Update Page</h1>
            {/* Form for updating a post will go here */}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter new title" 
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
                <textarea 
                    placeholder="Enter new body" 
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                />
                <button type="submit">Update Post</button>
            </form>
        </div>
     );
}
 
export default PostUpdate;