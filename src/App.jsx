import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import BlogDetails from './pages/BlogDetails.jsx'
import About from './pages/About.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import NotFound from './pages/NotFound.jsx'
import postsData from './data/posts.json'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ink">
      <Header siteInfo={postsData.siteInfo} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home data={postsData} />} />
          <Route path="/blog" element={<Blog data={postsData} />} />
          <Route path="/blog/:slug" element={<BlogDetails data={postsData} />} />
          <Route path="/about" element={<About data={postsData} />} />
          <Route path="/privacy" element={<Privacy data={postsData} />} />
          <Route path="/terms" element={<Terms data={postsData} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer siteInfo={postsData.siteInfo} categories={postsData.categories} />
    </div>
  )
}

export default App
