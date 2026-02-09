import { useState } from "react";
import { register } from "../api/auth.api";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const Navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!userName || !password || !email) {
            alert("All inputs are required");
            return;
        }
        console.log("Register attempt with:", { userName, email, password });
        
        try {
            const body = {username: userName, email: email, password: password};
            const response = await register(body);
            console.log("Register successful:", response.data);
            Navigate('/login');
        } catch (error) {
            console.log("Register error:", error);
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input 
                type="text" 
                placeholder="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </form>
     );
}
 
export default Register;