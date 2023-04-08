import React, { FunctionComponent } from 'react'
import Bonome from './../../assets/images/personne-priant.jpg'
import Portrait from './../../assets/images/portrait.jfif'
import Trinity from './../../assets/images/trinity.png'
import './home.scss'
import { GOALS, PROGRAMS } from '../../models/mock-service'
import ProgramCard from '../../components/program-card'
import GoalCard from '../../components/goal-card'

const Home: FunctionComponent = () => {
    return (
        <div className="home-container">
            <div className="desc-us">
                <div className="pray-container">
                    <div className="pray-card">
                        <img
                            src={Bonome}
                            className="pray-card__img"
                            alt="personne priant"
                        />
                    </div>
                    <div
                        className="pray-card__desc"
                        style={{
                            marginTop: '-20px',
                        }}
                    >
                        <br />
                        <br />
                        CONNECTEZ VOUS A DIEU
                        <br />
                        MAINTENANT
                    </div>
                    <div className="goal-container">
                        <h2 className="goal-container__title">OBJECTIFS</h2>
                        <div>
                            <p className="goal-container__desc">
                                Parcourez nos objectifs et comprenez pourquoi
                                nous sommes la et en quoi nous pouvons vous
                                aidez
                            </p>
                            <ul className="goal-items">
                                {GOALS.map((goal) => (
                                    <GoalCard
                                        key={goal.title + goal.id}
                                        goal={goal}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="moral-values">
                        <img
                            src={Trinity}
                            className="moral-values__img"
                            alt="sainte trinité"
                        />
                    </div>
                    <div
                        className="profil-card"
                        style={{ marginTop: '-120px' }}
                    >
                        <div className="profil-card-item">
                            <div className="profil-card-picture">
                                <img
                                    src={Portrait}
                                    className="profil-card-picture__img"
                                    alt="Mon profil"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="profil-spacer">
                        <div className="profil-spacer__line"></div>
                        <div></div>
                    </div>
                    <div className="profil__title">Alain Uw | facebook</div>

                    <div className="p-2 md:rounded-t-2xl text-center md:border-r-2">
                        <h2 className="profil__designation">
                            Pasteur x et coordonnateur chez y
                        </h2>
                        <p className="profil__desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Magnam esse eveniet incidunt officia non ipsam
                            rem eius! Necessitatibus repudiandae illum commodi
                            doloremque id exercitationem sed. Ipsum quaerat
                            omnis culpa sapiente.
                        </p>
                    </div>
                </div>
            </div>

            <div className="main">
                <h2 className="main__title">
                    <span>Brillant Tendo</span>
                    <br /> Dieu, au centre de tout domaine de la vie
                </h2>
                <p className="main__desc">
                    Nous sommes determinés à parler de Dieu et de son fils Jésus
                    dans le monde entier pour le salut des âmes
                </p>
                <div className="btn-container">
                    <button className="home-btn home-btn--black">
                        Savoir plus
                    </button>
                    &nbsp;&nbsp;
                    <button className="home-btn--rounded">
                        <i className="material-icons">local_phone</i>
                    </button>
                    &nbsp;&nbsp;
                    <button className="home-btn home-btn--sky">
                        Evénements
                    </button>
                </div>
                <div className="program-container">
                    <h3 className="program-container__title">Programme</h3>
                    <div>
                        {PROGRAMS.map((prog) => (
                            <ProgramCard key={prog.day + prog.id} prog={prog} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="program-small-screen-container">
                <h3 className="program-small-screen-container__title">
                    Programme
                </h3>
                <div>
                    {PROGRAMS.map((prog) => (
                        <ProgramCard key={prog.day + prog.id} prog={prog} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
