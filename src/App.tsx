import React, { FunctionComponent } from 'react'
import Header from './components/header'
import Home from './pages/Home'
import Footer from './components/footer'

const App: FunctionComponent = () => {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    )
}

export default App
