import { Route, Routes } from "react-router-dom"
import UserLayout from "./Pages/UserLayout"
import TemplatePage from "./Pages/TempleatePage"
import Home from "./Pages/Home"
import CreateResume from "./features/Resume/CreateResume"
import Login from "./features/auth/Login"
import Signup from "./features/auth/Signup"
import VerifyOtp from "./features/auth/components/VerifyOtp"
import { useGetCurrentUserQuery } from "./features/auth/authApi"
import Dashboard from "./features/Dashboard/Dashboard"
import ExportResume from "./features/Resume/ExportResume"
function App() {
  // const { data, isLoading } = useGetCurrentUserQuery()
  // if (isLoading) {
  //   return <div>Loading...</div>
  // }
  // console.log(data)
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume/templates" element={<TemplatePage />} />
        <Route path="/resume/templates/create/:slug" element={<CreateResume />} />
        <Route path="/resume/:slug/:id/edit" element={<CreateResume />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/signup" element={<Signup />} />
        <Route path="/account/verify-otp" element={<VerifyOtp />} />


      </Route>
      <Route path="/resume/:id/export" element={<ExportResume />} />

    </Routes>

  )
}

export default App
