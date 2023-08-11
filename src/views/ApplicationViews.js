import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { AllTags } from "../components/tags/AllTags"
import { AllPostsPage } from "../components/posts/AllPostsPage"
import { AllCategories } from "../components/categories/AllCategories"


export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />}  />
      <Route path="/register" element={<Register setToken={setToken} />}  />
      <Route path="/posts" element={<AllPostsPage />}/>
      <Route path="/categories" element={<AllCategories setToken={setToken} />}  />
      <Route element={<Authorized token={token} />} />
      <Route path="/tags" element={<AllTags setToken={setToken} />}/>
      </Route>
    </Routes>
  </>
}
