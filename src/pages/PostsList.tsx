import { useContext, useEffect, useState } from "react";
import type { Post } from "../types/post";
import { getPosts } from "../api/posts.api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextStore";
// import { AuthContext } from "../context/AuthContextStore";

const PostsList = () => {

    const [posts, setPosts] = useState<Post[]>([]); // State to hold posts data 
    const [error, setError] = useState<string | null>(null); // State to hold error message
    const Navigate = useNavigate();

    const authContext = useContext(AuthContext);
    const logout = authContext?.logout;

    useEffect(() => {
        // Fetch posts data from API when component mounts (run only once on mount)
        const fetchPosts = async () => {
            // Placeholder for fetching posts from API
            try {
                const responce = await getPosts();
                console.log("response post: ", responce.data.posts);

                setPosts(responce.data.posts);
            } catch (error) {
                setError("Failed to fetch posts: "+ error);
            }
        }
        
        fetchPosts();
    }, []);

    const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>, postId: number) => {
        console.log(`Mouse over on post with ID: ${postId}`);

        const target = e.currentTarget;
        const rect = target.getBoundingClientRect(); // Get element's position relative to viewport
        const x = e.clientX - rect.left; // X coordinate within the element.
        const y = e.clientY - rect.top;  // Y coordinate within the element.

        // console.log("coordinates: ", rect.left);
        
        const isTopLeft = x < rect.width / 2 && y < rect.height / 2;

        // CSS animations do not replay automatically unless the class is removed and re-added.
        target.classList.remove("hover-top-left", "hover-bottom-right");
        if (isTopLeft) {
            target.classList.add("hover-top-left");
        } else {
            target.classList.add("hover-bottom-right");
        }

        setTimeout(() => {
            target.classList.remove("hover-top-left", "hover-bottom-right");
        }, 1000); // Remove the class after animation duration (1s)
    }
    
    return ( 
        <div className="posts-list">
            
            <div className="header">
                <h1>Posts</h1>
                <button onClick={() => Navigate('/create')}>Create Post</button>
                <div>
                    <button onClick={() => Navigate('/login')}>Login</button>
                    <button onClick={() => {
                        logout?.();
                    }}>logout</button>
                    <button onClick={() => Navigate('/register')}>Register</button>
                </div>
            </div>
            
            
            {error && <p className="error">{error}</p>}

            <div className="container">
                {posts.map(post => (
                    <div 
                        key={post.id} 
                        className="post flip-in-hor-top"
                        onMouseOver={(e) => handleMouseOver(e, post.id) }
                        onClick={() => Navigate(`/posts/${post.id}`)}
                    >
                        {/* Posts will be rendered here */}
                        <h3 className="post-title">{post.title}</h3>
                        <p className="post-body">{post.body}</p>
                        <p className="post-views"><i>{post.views}</i></p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default PostsList;