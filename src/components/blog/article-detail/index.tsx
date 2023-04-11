import React, { FunctionComponent } from 'react'
import Image from './../../../assets/images/portrait.jfif'

const ArticleDetail: FunctionComponent = () => {
    return (
        <div className="md:px-16">
            <div className="flex items-center px-3">
                <i
                    role="button"
                    className="material-icons text-[20px] rounded-full p-2 hover:bg-slate-100 md:bg-orange-500 md:text-white md:hover:bg-orange-600"
                >
                    arrow_back
                </i>
                <span className="p-3 text-[20px] font-[500]">Ton Amour</span>
            </div>
            <div className="h-[200px] md:h-[300px] flex place-content-center">
                <img
                    src={Image}
                    className="object-contain h-[100%]"
                    alt="amour img"
                />
            </div>
            <p className="px-3 italic text-slate-500 text-end">
                Publié le 3/12/2002
            </p>
            <div className="p-5 md:px-36">
                <h3 className="font-semibold border-l-4 mb-3 px-2 border-orange-500">
                    Descritpion
                </h3>
                <div className="text-center px-2">
                    <p className="py-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis consectetur ducimus quaerat ut itaque delectus
                        sapiente voluptatibus laboriosam minus quisquam! Quasi
                        voluptate possimus explicabo eum voluptates eius ipsam
                        saepe mollitia.ducimus quaerat ut itaque delectus
                        sapiente voluptatibus laboriosam minus quisquam! Quasi
                        voluptate possimus explicabo eum voluptates eius ipsam
                        saepe mollitia.
                    </p>
                    <p className="py-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis consectetur ducimus quaerat ut itaque delectus
                        sapiente voluptatibus laboriosam minus quisquam! Quasi
                        voluptate possimus explicabo eum voluptates eius ipsam
                        saepe mollitia.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis consectetur ducimus quaerat ut itaque delectus
                        sapiente voluptatibus laboriosam minus quisquam! Quasi
                        voluptate possimus explicabo eum voluptates eius ipsam
                        saepe mollitia.
                    </p>
                </div>
            </div>
            <div className="p-5 md:px-36">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold border-l-4 mb-3 px-2 border-sky-900">
                        Commentaires
                    </h3>
                    <span className="border-2 py-1 px-2">12</span>
                </div>
                <div>
                    <div className="pl-5 py-3 border-b">
                        <p>
                            <span className="font-[500] font-mono">
                                Alain Uwezo :{' '}
                            </span>
                            <span>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Sed illo veritatis accusamus
                                officia!
                            </span>
                        </p>
                        <p>1 min ago</p>
                    </div>
                    <div className="pl-5 py-3 border-b">
                        <p>
                            <span className="font-[500] font-mono">
                                Alain Uwezo :{' '}
                            </span>
                            <span>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Sed illo veritatis accusamus
                                officia!
                            </span>
                        </p>
                        <p>1 min ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetail
