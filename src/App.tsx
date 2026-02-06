import { BrowserRouter, Route, Routes } from "react-router-dom"
import PostsList from "./pages/PostsList"
import PostDetails from "./pages/PostDetails"
import PostCreate from "./pages/PostCreate"
import PostUpdate from "./pages/PostUpdate"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/create" element={<PostCreate />} />
        <Route path="/update/:id" element={<PostUpdate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
