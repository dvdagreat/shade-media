import { BrowserRouter, Route, Routes } from "react-router"
import Header from "./components/Header"
import PostHome from "./modules/posts/pages/PostHome"
import PostList from "./modules/posts/pages/PostList"
import PostDetail from "./modules/posts/pages/PostDetail"
import PostCreate from "./modules/posts/pages/PostCreate"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route index element={ <PostHome /> } />
            <Route path="list" element={ <PostList /> } />
            <Route path="detail/:id" element={ <PostDetail /> } />
            <Route path="create" element={ <PostCreate /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
