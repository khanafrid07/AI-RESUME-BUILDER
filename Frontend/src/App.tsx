import { Route, Routes } from "react-router-dom"
import UserLayout from "./Pages/UserLayout"
import TemplatePage from "./Pages/TempleatePage"
import Home from "./Pages/Home"
import Dashboard from "./features/Dashboard/Dashboard"
import Login from "./features/auth/Login"
import Signup from "./features/auth/Signup"

function App() {

  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/resume/templates" element={<TemplatePage />} />
        <Route path="/resume/templates/create/:slug" element={<Dashboard />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />


      </Route>

    </Routes>

  )
}

export default App
