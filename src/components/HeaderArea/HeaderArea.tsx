import { useState } from "react"

export const HeaderArea = () => {
    const [menuSelected, setMenuSelected] = useState<number>(1);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <header className='bg-[#080808] fixed top-0 left-0 right-0 h-20 z-10'>

            <div className={`max-w-screen-xl h-full mx-auto px-2 flex justify-between`}>

                <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="font-['Open_Sans'] text-[#FFF] font-bold md:text-2xl">EasyFinances</h3>
                </div>

                <div className="w-full flex justify-end items-center">

                    <div className={`w-7 h-6 flex flex-col justify-between cursor-pointer xl:hidden`} onClick={() => setOpenMenu(!openMenu)}>
                        <div className="w-full h-1 bg-[#FFF] rounded"></div>
                        <div className="w-full h-1 bg-[#FFF] rounded"></div>
                        <div className="w-full h-1 bg-[#FFF] rounded"></div>
                    </div>

                    <nav className={`bg-[#080808] ${openMenu ? 'fixed top-20 left-0 right-0 bottom-0 z-10' : 'hidden'} xl:flex xl:h-full xl:static`}>

                        <ul className="h-full flex flex-col justify-around items-center list-none xl:flex-row">
                            <li className={`px-4 py-2 ${menuSelected == 1 ? 'border border-solid border-[#BCEF30] font-bold' : 'font-normal'} font-["inter"] transition duration-500 ${openMenu ? 'text-lg' : 'text-sm'} font-bold rounded-full cursor-pointer lg:mx-1 lg:text-sm hover:border border-solid border-[#BCEF30] text-[#FFF]`} onClick={() => {
                                setMenuSelected(1);
                                setOpenMenu(false);
                            }}>Início</li>

                            <li className={`px-4 py-2 ${menuSelected == 2 ? 'border border-solid border-[#BCEF30] font-bold' : 'font-normal'} font-["inter"]  transition duration-500 ${openMenu ? 'text-lg' : 'text-sm'} rounded-full cursor-pointer lg:mx-1 lg:text-sm hover:border border-solid border-[#BCEF30] text-[#FFF]`} onClick={() => {
                                setMenuSelected(2);
                                setOpenMenu(false);
                            } 
                            }>Metodologia</li>

                            <li className={`px-4 py-2 ${menuSelected == 3 ? 'border border-solid border-[#BCEF30] font-bold' : 'font-normal'} font-["inter"]  transition duration-500 ${openMenu ? 'text-lg' : 'text-sm'} rounded-full cursor-pointer lg:mx-1 lg:text-sm hover:border border-solid border-[#BCEF30] text-[#FFF]`} onClick={() =>  { 
                                setMenuSelected(3);
                                setOpenMenu(false);
                            }}>Objetivo</li>

                            <li className={`px-4 py-2 ${menuSelected == 4 ? 'border border-solid border-[#BCEF30] font-bold' : 'font-normal'} font-["inter"]  transition duration-500 ${openMenu ? 'text-lg' : 'text-sm'} rounded-full cursor-pointer lg:mx-1 lg:text-sm hover:border border-solid border-[#BCEF30] text-[#FFF]`} onClick={() => {
                                setMenuSelected(4);
                                setOpenMenu(false);
                            }}>Professores</li>

                            <li className={`px-4 py-2 ${menuSelected == 5 ? 'border border-solid border-[#BCEF30] font-bold' : 'font-normal'} font-["inter"]  transition duration-500 ${openMenu ? 'text-lg' : 'text-sm'} rounded-full cursor-pointer lg:mx-1 lg:text-sm hover:border border-solid border-[#BCEF30] text-[#FFF]`} onClick={() => {
                                setMenuSelected(5);
                                setOpenMenu(false);
                            }}>Depoimentos</li>

                            <li className={`${openMenu ? 'text-lg' : 'text-sm'} text-[#FFF]  font-["inter"]  lg:mx-2 lg:px-4 lg:py-2 lg:text-sm`}>
                                <select name="" id="" className="bg-[#080808] font-semibold outline-none">
                                    <option className="font-semibold" value="Selecione">Selecione</option>
                                    <option className="font-semibold" value="PT-BR">PT-BR</option>
                                    <option className="font-semibold" value="EN">Inglês</option>
                                    <option className="font-semibold" value="ESP">Espanhol</option>
                                </select>
                            </li>

                            <li className={`p-4 flex justify-center items-center ${openMenu ? 'text-lg' : 'text-sm'}  font-["inter"]  lg:mx-1 lg:text-sm lg:px-4 lg:py-2 bg-[#080808] text-[#FFF] border border-solid border-[#BCEF30] font-bold cursor-pointer rounded-full`}>Comece agora</li>
                        </ul>

                    </nav>

                </div>

            </div>

        </header>
    )
}