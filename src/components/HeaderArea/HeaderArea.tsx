import { useState } from "react"

export const HeaderArea = () => {
    const [menuSelected, setMenuSelected] = useState<number>(1);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <header className='bg-[#FFF] fixed top-0 left-0 right-0 h-20 z-10'>

            <div className={`max-w-screen-xl h-full mx-auto px-2 flex justify-between`}>

                <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="font-['Open_Sans'] font-bold md:text-2xl">EasyFinances</h3>
                </div>

                <div className="w-full flex justify-end items-center">

                    <div className={`w-7 h-6 flex flex-col justify-between cursor-pointer lg:hidden`} onClick={() => setOpenMenu(!openMenu)}>
                        <div className="w-full h-1 bg-black rounded"></div>
                        <div className="w-full h-1 bg-black rounded"></div>
                        <div className="w-full h-1 bg-black rounded"></div>
                    </div>

                    <nav className={`bg-[#FFF] ${openMenu ? 'fixed top-20 left-0 right-0 bottom-0 z-10' : 'hidden'} lg:flex lg:h-full lg:static`}>

                        <ul className="h-full flex flex-col justify-around items-center list-none lg:flex-row">
                            <li className={`px-4 py-2 ${menuSelected == 1 ? 'bg-[#BCEF30] font-bold' : '#FFF font-normal'} font-["inter"] transition duration-500 ${openMenu ? 'text-lg' : 'text-sm'} font-bold rounded-full cursor-pointer lg:mx-1 hover:bg-[#BCEF30]`} onClick={() => {
                                setMenuSelected(1);
                                setOpenMenu(false);
                            }}>Início</li>

                            <li className={`px-4 py-2 ${menuSelected == 2 ? 'bg-[#BCEF30] font-bold' : '#FFF font-normal'} font-["inter"]  transition duration-500 ${openMenu ? 'text-lg' : 'text-sm'} rounded-full cursor-pointer lg:mx-1 hover:bg-[#BCEF30]`} onClick={() => {
                                setMenuSelected(2);
                                setOpenMenu(false);
                            } 
                            }>Metodologia</li>

                            <li className={`px-4 py-2 ${menuSelected == 3 ? 'bg-[#BCEF30] font-bold' : '#FFF font-normal'} font-["inter"]  transition duration-500 ${openMenu ? 'text-lg' : 'text-sm'} rounded-full cursor-pointer lg:mx-1 hover:bg-[#BCEF30]`} onClick={() =>  { 
                                setMenuSelected(3);
                                setOpenMenu(false);
                            }}>Objetivo</li>

                            <li className={`px-4 py-2 ${menuSelected == 4 ? 'bg-[#BCEF30] font-bold' : '#FFF font-normal'} font-["inter"]  transition duration-500 ${openMenu ? 'text-lg' : 'text-sm'} rounded-full cursor-pointer lg:mx-1 hover:bg-[#BCEF30]`} onClick={() => {
                                setMenuSelected(4);
                                setOpenMenu(false);
                            }}>Professores</li>

                            <li className={`px-4 py-2 ${menuSelected == 5 ? 'bg-[#BCEF30] font-bold' : '#FFF font-normal'} font-["inter"]  transition duration-500 ${openMenu ? 'text-lg' : 'text-sm'} rounded-full cursor-pointer lg:mx-1 hover:bg-[#BCEF30]`} onClick={() => {
                                setMenuSelected(5);
                                setOpenMenu(false);
                            }}>Depoimentos</li>

                            <li className={`${openMenu ? 'text-lg' : 'text-sm'}  font-["inter"]  lg:mx-2 lg:px-4 lg:py-2`}>
                                <select name="" id="" className="font-semibold outline-none">
                                    <option className="font-semibold" value="Selecione">Selecione</option>
                                    <option className="font-semibold" value="PT-BR">PT-BR</option>
                                    <option className="font-semibold" value="EN">Inglês</option>
                                    <option className="font-semibold" value="ESP">Espanhol</option>
                                </select>
                            </li>

                            <li className={`w-full py-4 flex justify-center items-center ${openMenu ? 'text-lg' : 'text-sm'}  font-["inter"]  lg:h-full lg:mx-1 lg:px-4 lg:py-2 bg-[#080808] text-[#FFF] font-bold cursor-pointer rounded lg:rounded-none`}>Comece agora</li>
                        </ul>

                    </nav>

                </div>

            </div>

        </header>
    )
}