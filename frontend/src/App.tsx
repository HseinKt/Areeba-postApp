import { BrowserRouter, Route, Routes } from "react-router-dom"
import PostsList from "./pages/PostsList"
import PostDetails from "./pages/PostDetails"
import PostCreate from "./pages/PostCreate"
import PostUpdate from "./pages/PostUpdate"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Test from "./pages/Test"

// import { AuthProvider } from "./context/AuthContext"

function App() {

  return (
    <BrowserRouter>
        {/* <AuthProvider> */}
        <Routes>
          <Route path="/" element={<Test/>}/>
          <Route path="/home" element={<PostsList />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/create" element={<PostCreate />} />
          <Route path="/update/:id" element={<PostUpdate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* </AuthProvider> */}
    </BrowserRouter>
  )
}

export default App
