import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { AllPostsPage } from "../components/posts/AllPostsPage"
import { AllCategories } from "../components/categories/AllCategories"
import { UserPostsPage } from "../components/userPosts/UserPostsPage"
import { AllTags } from "../components/tags/AllTags"


export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <h1>hello</h1>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />}  />
      <Route path="/register" element={<Register setToken={setToken} />}  />
      <Route path="/posts" element={<AllPostsPage />}  />
      <Route path="/categories" element={<AllCategories />}  />
      <Route path="/tags" element={<AllTags />}  />
      <Route path="/userPosts" element={<UserPostsPage />}  />
      <Route element={<Authorized token={token} />}/>
        {/* Add Routes here */}
    </Routes>
  </>
}