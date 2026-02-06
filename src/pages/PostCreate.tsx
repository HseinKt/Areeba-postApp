import { useState } from "react";
import { createPost } from "../api/posts.api";
import { useNavigate } from "react-router-dom";

const PostCreate = () => {
    const [newTitle, setNewTitle] = useState("");
    const [newUserId, setNewUserId] = useState("");
    const Navigate = useNavigate();
    
    const handleCreatePost = async () => {
        if(!newTitle || !newUserId) {
            alert("Title and User ID are required");
            return;
        }

        try {
            // Call API to create post
            const body = {title: newTitle, userId: Number(newUserId)};
            const response = await createPost(body);

            console.log("Post created: ", response.data);
            alert("Post created successfully");
            setNewTitle("");
            setNewUserId("");
            Navigate('/');
        } catch (error) {
            alert("Failed to create the post: " + error);
        }
    }

    return ( 
        <div className="post-create">
            <h1>Create Post</h1>
            {/* Form for creating a new post will go here */}
            <input 
                type="text" 
                placeholder="Enter post title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Enter user ID"
                value={newUserId}
                onChange={(e) => setNewUserId(e.target.value)}
            />
            <button onClick={() => handleCreatePost()}>Create Post</button>
        </div>
     );
}
 
export default PostCreate