import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Splash from './pages/Splash'
import Home from './pages/Home'
import About from './pages/About'
import Engineering from './pages/Engineering'
import WorkExperience from './pages/WorkExperience'
import PassionProjects from './pages/PassionProjects'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/art" element={<Home />} />
        <Route path="/art/about" element={<Layout><About /></Layout>} />
        <Route path="/art/works" element={<Layout><div /></Layout>} />
        <Route path="/engineering" element={<Layout><Engineering /></Layout>} />
        <Route path="/engineering/work" element={<Layout><WorkExperience /></Layout>} />
        <Route path="/engineering/projects" element={<Layout><PassionProjects /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}
