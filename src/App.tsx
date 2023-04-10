import React, { FunctionComponent } from 'react'
import Header from './components/header'
import Home from './pages/Home'
import Footer from './components/footer'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Blog from './pages/Blog'

const App: FunctionComponent = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route Component={Home} path="/home" />
                <Route Component={Blog} path="/blog" />
                <Route Component={Home} path="" />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
