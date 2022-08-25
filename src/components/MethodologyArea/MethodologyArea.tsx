import BannerImage from '../../assets/images/image-area-methodology.png';

export const MethodologyArea = () => {
    return (
        <section className="w-full p-4 bg-[#FFF]">
            <article className="p-8 flex flex-col">

                <div className="flex flex-col">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#BCEF30] flex justify-center items-center rounded-full">1</div>
                        <h2 className="ml-2 font-semibold">Metodologia</h2>
                    </div>
                    <p className="mt-8">Com mais de 4 módulos e 800 horas de conteúdo, você vai ver como o mercado financeiro funciona e como atuar nele.</p>
                </div>

                <div className="w-full mt-20 grid-cols-1">

                    <div className="w-full h-48 p-4 bg-[#080808] flex flex-col justify-between rounded-md cursor-pointer transition ease duration-500 hover:scale-105">
                        <p className="text-[#FFF]">01</p>
                        <div>
                            <h3 className="text-[#BCEF30] font-bold">Mercado Financeiro</h3>
                            <p className="text-[#FFF] text-xs">30 aulas nesse Módulo</p>
                        </div>
                    </div>

                    <div className="w-full h-48 mt-4 p-4 bg-[#080808] flex flex-col justify-between rounded-md cursor-pointer transition ease duration-500 hover:scale-105">
                        <p className="text-[#FFF]">02</p>
                        <div>
                            <h3 className="text-[#BCEF30] font-bold">Economizar e investir</h3>
                            <p className="text-[#FFF] text-xs">20 aulas nesse Módulo</p>
                        </div>
                    </div>

                    <div className="w-full h-48 mt-4 p-4 bg-[#080808] flex flex-col justify-between rounded-md cursor-pointer transition ease duration-500 hover:scale-105">
                        <p className="text-[#FFF]">03</p>
                        <div>
                            <h3 className="text-[#BCEF30] font-bold">Corretoras e fundos</h3>
                            <p className="text-[#FFF] text-xs">25 aulas nesse Módulo</p>
                        </div>
                    </div>

                    <div className="w-full h-48 mt-4 p-4 bg-[#080808] flex flex-col justify-between rounded-md cursor-pointer transition ease duration-500 hover:scale-105">
                        <p className="text-[#FFF]">04</p>
                        <div>
                            <h3 className="text-[#BCEF30] font-bold">Segurança Financeira</h3>
                            <p className="text-[#FFF] text-xs">15 aulas nesse Módulo</p>
                        </div>
                    </div>

                </div>

                <div className="w-full h-40 p-2 mt-12 bg-[#080808]">
                    <div className="w-full h-full border-2 border-[#BCEF30]"></div>
                </div>
            </article>
        </section>
    )
}