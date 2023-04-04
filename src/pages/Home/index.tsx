import React, { FunctionComponent } from 'react'
import Bonome from './../../assets/images/personne-priant.jpg'
import Profil from './../../assets/images/profil.png'
import './home.css'

const Home: FunctionComponent = () => {
    return (
        <div className="home-container">
            <div className="left-container">
                <div className="rounded-tl-3xl rounded-br-3xl">
                    <div className="md:rounded-tl-3xl flex place-content-center">
                        <img
                            src={Bonome}
                            className="rounded-tl-3xl rounded-br-3xl px-10 md:px-0"
                            alt="personne priant"
                        />
                    </div>
                    <div
                        className="md:bg-black h-32 pt-7 px-3 md:text-white md:rounded-br-3xl
                            border-l-4 border-black"
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
                    <div className="bg-black text-white md:text-black md:bg-orange-300 md:rounded-tr-3xl md:my-2 p-3">
                        <h2 className="font-bold text-center">Objectifs</h2>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Soluta atque veritatis rerum tempora nesciunt
                            doloremque, consequatur modi
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-white md:rounded-tr-3xl bg-orange-300 md:bg-sky-300 h-80"></div>
                    <div
                        className=" rounded-full p-2 bg-white"
                        style={{ marginTop: '-120px' }}
                    >
                        <div className="p-10 rounded-full">
                            <img src={Profil} alt="Mon profil" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 h-20">
                        <div className="border-r-2 border-black h-full"></div>
                        <div></div>
                    </div>
                    <div className="text-center">Alain Uw | facebook</div>

                    <div className="p-2 rounded-t-2xl">
                        <h2 className="text-center font-bold px-2 bg-gray-100 rounded-t-2xl">
                            Pasteur x et coordonnateur chez y. Reverand et
                            optimiste
                        </h2>
                    </div>
                </div>
            </div>

            <div className="md:pr-16 border-1 md:order-2 px-2">
                <h2 className="py-4 md:py-0 md:uppercase font-bold text-5xl">
                    Dieu, au centre de tout domaine de la vie
                </h2>
                <div className="px-2 py-6 text-center md:text-start">
                    <button className="bg-black text-white rounded-3xl px-4 py-1">
                        Savoir plus
                    </button>
                    &nbsp;&nbsp;
                    <button className="bg-sky-white border-2 border-black rounded-full p-1 px-3">
                        +
                    </button>
                    &nbsp;&nbsp;
                    <button className="bg-orange-400 text-black rounded-3xl px-4 py-1">
                        Nos articles
                    </button>
                </div>
                <div className="hidden md:block py-20">
                    <h3 className="text-end font-bold text-gray-500">
                        Programme
                    </h3>
                    <div>
                        <div className="border-t border-t-black flex py-3 items-center">
                            <div className="px-2 font-bold text-xl uppercase">
                                LUNDI
                            </div>
                            <div className="w-full">
                                Debut de echaristie et apres il y a
                                proclammation
                            </div>
                            <div className="w-[200px] text-end">
                                13h00 - 18h30
                            </div>
                        </div>
                        <div className="border-t border-t-black flex py-3 items-center">
                            <div className="px-2 font-bold text-xl uppercase">
                                LUNDI
                            </div>
                            <div className="w-full">
                                Debut de echaristie et apres il y a
                                proclammation
                            </div>
                            <div className="w-[200px] text-end">
                                13h00 - 18h30
                            </div>
                        </div>
                        <div className="border-t border-t-black flex py-3 items-center">
                            <div className="px-2 font-bold text-xl uppercase">
                                LUNDI
                            </div>
                            <div className="w-full">
                                Debut de echaristie et apres il y a
                                proclammation
                            </div>
                            <div className="w-[200px] text-end">
                                13h00 - 18h30
                            </div>
                        </div>
                        <div className="border-t border-t-black flex py-3 items-center">
                            <div className="px-2 font-bold text-xl uppercase">
                                LUNDI
                            </div>
                            <div className="w-full">
                                Debut de echaristie et apres il y a
                                proclammation
                            </div>
                            <div className="w-[200px] text-end">
                                13h00 - 18h30
                            </div>
                        </div>
                        <div className="border-t border-t-black flex py-3 items-center">
                            <div className="px-2 font-bold text-xl uppercase">
                                LUNDI
                            </div>
                            <div className="w-full">
                                Debut de echaristie et apres il y a
                                proclammation
                            </div>
                            <div className="w-[200px] text-end">
                                13h00 - 18h30
                            </div>
                        </div>
                        <div className="border-t border-t-black flex py-3 items-center">
                            <div className="px-2 font-bold text-xl uppercase">
                                LUNDI
                            </div>
                            <div className="w-full">
                                Debut de echaristie et apres il y a
                                proclammation
                            </div>
                            <div className="w-[200px] text-end">
                                13h00 - 18h30
                            </div>
                        </div>
                        <div className="border-t border-t-black flex py-3 items-center">
                            <div className="px-2 font-bold text-xl uppercase">
                                LUNDI
                            </div>
                            <div className="w-full">
                                Debut de echaristie et apres il y a
                                proclammation
                            </div>
                            <div className="w-[200px] text-end">
                                13h00 - 18h30
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:hidden py-10 order-3 px-3">
                <h3 className="text-end font-bold text-gray-500">Programme</h3>
                <div>
                    <div className="border-t border-t-black flex py-3 items-center">
                        <div className="px-2 font-bold text-xl uppercase">
                            LUNDI
                        </div>
                        <div className="w-full">
                            Debut de echaristie et apres il y a proclammation
                        </div>
                        <div className="w-[200px] text-end">13h00 - 18h30</div>
                    </div>
                    <div className="border-t border-t-black flex py-3 items-center">
                        <div className="px-2 font-bold text-xl uppercase">
                            LUNDI
                        </div>
                        <div className="w-full">
                            Debut de echaristie et apres il y a proclammation
                        </div>
                        <div className="w-[200px] text-end">13h00 - 18h30</div>
                    </div>
                    <div className="border-t border-t-black flex py-3 items-center">
                        <div className="px-2 font-bold text-xl uppercase">
                            LUNDI
                        </div>
                        <div className="w-full">
                            Debut de echaristie et apres il y a proclammation
                        </div>
                        <div className="w-[200px] text-end">13h00 - 18h30</div>
                    </div>
                    <div className="border-t border-t-black flex py-3 items-center">
                        <div className="px-2 font-bold text-xl uppercase">
                            LUNDI
                        </div>
                        <div className="w-full">
                            Debut de echaristie et apres il y a proclammation
                        </div>
                        <div className="w-[200px] text-end">13h00 - 18h30</div>
                    </div>
                    <div className="border-t border-t-black flex py-3 items-center">
                        <div className="px-2 font-bold text-xl uppercase">
                            LUNDI
                        </div>
                        <div className="w-full">
                            Debut de echaristie et apres il y a proclammation
                        </div>
                        <div className="w-[200px] text-end">13h00 - 18h30</div>
                    </div>
                    <div className="border-t border-t-black flex py-3 items-center">
                        <div className="px-2 font-bold text-xl uppercase">
                            LUNDI
                        </div>
                        <div className="w-full">
                            Debut de echaristie et apres il y a proclammation
                        </div>
                        <div className="w-[200px] text-end">13h00 - 18h30</div>
                    </div>
                    <div className="border-t border-t-black flex py-3 items-center">
                        <div className="px-2 font-bold text-xl uppercase">
                            LUNDI
                        </div>
                        <div className="w-full">
                            Debut de echaristie et apres il y a proclammation
                        </div>
                        <div className="w-[200px] text-end">13h00 - 18h30</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
