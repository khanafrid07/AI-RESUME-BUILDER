import { Route, Routes } from "react-router-dom"
import UserLayout from "./Pages/UserLayout"
import TemplatePage from "./Pages/TempleatePage"
import Home from "./Pages/Home"
import Dashboard from "./features/Dashboard/Dashboard"

function App() {

  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/resume/templates" element={<TemplatePage />} />
        <Route path="/create" element={<Dashboard />} />


      </Route>

    </Routes>

  )
}

export default App
