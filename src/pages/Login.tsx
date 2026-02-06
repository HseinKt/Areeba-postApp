import { useState } from "react";
import { login } from "../api/auth.api";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const Navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!userName || !password) {
            alert("Username and password are required");
            return;
        }
        console.log("Login attempt with:", { userName, password });
        
        try {
            const body = {username: userName, password: password};
            const response = await login(body);
            console.log("Login successful:", response.data);
            // alert("Login successful");
            localStorage.setItem("token", response.data.accessToken);
            Navigate('/');
        } catch (error) {
            console.log("Login error:", error);
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input 
                type="text" 
                placeholder="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
     );
}
 
export default Login;