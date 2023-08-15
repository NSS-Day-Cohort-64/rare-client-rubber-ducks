import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { AllTags } from "../components/tags/AllTags"
import { AllPostsPage } from "../components/posts/AllPostsPage"
import { AllCategories } from "../components/categories/AllCategories"
import { UserPostsPage } from "../components/userPosts/UserPostsPage"
import { PostDetails } from "../components/posts/PostDetails"

export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />}  />
      <Route path="/register" element={<Register setToken={setToken} />}  />
      <Route path="/posts" element={<AllPostsPage />}  />
      <Route path="/categories" element={<AllCategories />}  />
      <Route path="/tags" element={<AllTags />}  />
      <Route path="/userPosts" element={<UserPostsPage />}  />
      <Route path="/posts/:postId" element={<PostDetails />} />
      <Route element={<Authorized token={token} />}/>
    </Routes>
  </>
}
