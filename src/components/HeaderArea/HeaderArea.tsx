import { useState } from "react"

export const HeaderArea = () => {

    const [menuSelected, setMenuSelected] = useState<number>(1);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <header className="fixed top-0 left-0 right-0 h-20 bg-white">

            <div className={`max-w-screen-xl h-20 flex justify-between mx-auto px-2`}>

                <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="font-bold">EasyFinances</h3>
                </div>

                <div className="w-full flex justify-end items-center">

                    <div className={`w-7 h-6 flex flex-col justify-between cursor-pointer lg:hidden`} onClick={() => setOpenMenu(!openMenu)}>
                        <div className="w-full h-1 bg-black rounded"></div>
                        <div className="w-full h-1 bg-black rounded"></div>
                        <div className="w-full h-1 bg-black rounded"></div>
                    </div>

                    <nav className={`h-4/5 bg-[#FFF] ${openMenu ? 'h-full flex flex-col items-center absolute top-20 left-0 right-0 z-10' : 'hidden'} lg:flex lg:w-auto lg:bg-transparent lg:static`}>

                        <ul className="h-full flex flex-col justify-between items-center list-none lg:flex-row">
                            <li className={`px-4 py-2 lg:mx-2 ${menuSelected == 1 ? 'bg-[#BCEF30] font-bold' : '#FFF font-normal'} transition ease duration-500 flex justify-center align-center font-bold rounded-full cursor-pointer`} onClick={() => setMenuSelected(1)}>Início</li>
                            <li className={`px-4 py-2 lg:mx-2 ${menuSelected == 2 ? 'bg-[#BCEF30] font-bold' : '#FFF font-normal'} transition ease duration-500 rounded-full cursor-pointer`} onClick={() => setMenuSelected(2)}>Metodologia</li>
                            <li className={`px-4 py-2 lg:mx-2 ${menuSelected == 3 ? 'bg-[#BCEF30] font-bold' : '#FFF font-normal'} transition ease duration-500 rounded-full cursor-pointer`} onClick={() => setMenuSelected(3)}>O objetivo</li>
                            <li className={`px-4 py-2 lg:mx-2 ${menuSelected == 4 ? 'bg-[#BCEF30] font-bold' : '#FFF font-normal'} transition ease duration-500 rounded-full cursor-pointer`} onClick={() => setMenuSelected(4)}>Professores</li>
                            <li className={`px-4 py-2 lg:mx-2 ${menuSelected == 5 ? 'bg-[#BCEF30] font-bold' : '#FFF font-normal'} transition ease duration-500 rounded-full cursor-pointer`} onClick={() => setMenuSelected(5)}>Depoimentos</li>

                            <li className={`lg:mx-2 lg:px-4 lg:py-2`}>
                                <select name="" id="" className="font-semibold outline-none">
                                    <option className="font-semibold " value="Selecione">Selecione</option>
                                    <option className="font-semibold " value="PT-BR">PT-BR</option>
                                    <option className="font-semibold " value="EN">Inglês</option>
                                    <option className="font-semibold " value="ESP">Espanhol</option>
                                </select>
                            </li>

                            <li className={`w-full py-4 flex justify-center lg:h-full lg:mx-2 lg:px-4 lg:py-2 bg-[#080808] text-[#FFF] font-bold cursor-pointer`}>Comece agora</li>
                        </ul>


                    </nav>
                </div>
            </div>

        </header>
    )
}