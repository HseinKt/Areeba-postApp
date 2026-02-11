import { BrowserRouter, Route, Routes } from "react-router-dom"
import PostsList from "./pages/PostsList"
import PostDetails from "./pages/PostDetails"
import PostCreate from "./pages/PostCreate"
import PostUpdate from "./pages/PostUpdate"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { Provider } from "react-redux"
// import { AuthProvider } from "./context/AuthContext"
import store from "./redux/store.tsx";

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>

        {/* <AuthProvider> */}
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/create" element={<PostCreate />} />
          <Route path="/update/:id" element={<PostUpdate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* </AuthProvider> */}
      </Provider>
    </BrowserRouter>
  )
}

export default App
