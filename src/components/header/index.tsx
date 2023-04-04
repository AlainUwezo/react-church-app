import React, { FunctionComponent } from 'react'
import Logo from '../../assets/images/logo.png'

const Header: FunctionComponent = () => {
    return (
        <div className="grid grid-cols-2 px-2 md:px-3">
            <div className="grid grid-cols-2 px-0 md:px-16 items-start">
                <div className="py-2 flex items-center">
                    <img src={Logo} className="h-6 w-auto" alt="Logo" />
                    <div className="font-bold uppercase">EGLISE</div>
                </div>
                <div
                    className="hidden md:block bg-slate-100 h-32 rounded-br-3xl"
                    style={{ borderBottomRightRadius: '50px' }}
                ></div>
            </div>
            <div className="py-2">
                <div className="flex">
                    <span className="mr-3">Accueil</span>
                    <span className="mr-3">Blog</span>
                    <span className="mr-3">A propos</span>
                </div>
            </div>
        </div>
    )
}

export default Header
