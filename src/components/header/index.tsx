import React, { FunctionComponent, useState } from 'react'
import Logo from '../../assets/images/logo.png'
import './header.scss'

const Header: FunctionComponent = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <div className="header">
            <div className="designation">
                <div className="brand">
                    <img src={Logo} className="brand__logo" alt="Logo" />
                    <div className="brand__name">EGLISE</div>
                </div>
                <div className="space-div"></div>
            </div>
            <div className="nav">
                <div className="nav-items">
                    <span className="nav-items__link nav__link--active nav-items__link--active">
                        Accueil
                    </span>
                    <span className="nav-items__link">Blog</span>
                    <span className="nav-items__link">A propos</span>
                </div>
            </div>
            <div className="nav-toggle-menu">
                <button
                    onClick={() => toggleNav()}
                    className="nav-toggle-menu__btn nav-toggle-menu__btn--open"
                >
                    <i className="material-icons">menu</i>
                </button>
            </div>

            {toggleMenu && (
                <nav className="nav-small-screen">
                    <div className="text-end">
                        <button
                            onClick={() => toggleNav()}
                            className="nav-toggle-menu__btn nav-toggle-menu__btn--close"
                        >
                            <i className="material-icons">close</i>
                        </button>
                    </div>
                    <ul className="nav-small-screen-items">
                        <li
                            className="nav-small-screen-items__link 
                                nav-small-screen-items__link--active nav__link--active"
                        >
                            Accueil
                        </li>
                        <li className="nav-small-screen-items__link">Blog</li>
                        <li className="nav-small-screen-items__link">
                            A propos
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    )
}

export default Header
