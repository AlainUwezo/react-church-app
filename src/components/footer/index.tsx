import React, { FunctionComponent } from 'react'
import './footer.scss'
import Logo from './../../assets/images/logo.png'

const Footer: FunctionComponent = () => {
    return (
        <div>
            <div className="footer">
                <div className="localisation">
                    <div className="footer-logo-small-screen">
                        <img
                            className="footer-logo__img"
                            src={Logo}
                            alt="logo img"
                        />
                    </div>
                    <h2 className="localisation__title">Localisation</h2>
                    <p className="localisation__desc">
                        Rue 24, avenue Mobutu, <br />
                        Lubumbashi, RDC, <br />
                        Nous voous attendons
                    </p>
                </div>
                <div className="contact">
                    <div className="footer-logo">
                        <img
                            className="footer-logo__img"
                            src={Logo}
                            alt="logo img"
                        />
                    </div>
                    <h2 className="contact__title">Contacts</h2>
                    <p className="contact__desc">
                        <span>0973061564</span>
                        <br />
                        <span>084 30 61 564</span>
                        <br />
                        <span>+243 81 30 61 564</span>
                        <br />
                    </p>
                </div>
                <div className="social-net">
                    <h2 className="social-net__title">Réseaux sociaux</h2>
                    <p className="social-net__desc">
                        Nous sommes également sur les réseaux sociaux.
                        Contactez-nous maintenant via ces liens
                    </p>
                    <div className="social-net-items">
                        <span>facebook</span>
                    </div>
                </div>
            </div>
            <div className="copyright">&copy;2023 Eglise</div>
        </div>
    )
}

export default Footer
