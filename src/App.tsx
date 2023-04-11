import React, { FunctionComponent } from 'react'
import Header from './components/header'
import Home from './pages/Home'
import Footer from './components/footer'
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom'
import Blog from './pages/Blog'
import ArticleDetail from './components/blog/article-detail'

const App: FunctionComponent = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/home" Component={Home} />
                <Route path="/blog" Component={Blog} />
                <Route path="blog/:id" Component={ArticleDetail} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
