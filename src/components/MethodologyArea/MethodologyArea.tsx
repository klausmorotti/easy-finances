import styles from '../../styles.module.css';

export const MethodologyArea = () => {
    return (
        <section className="w-full p-4 bg-[#FFF]">

            <article className="max-w-screen-xl mx-auto p-8 flex flex-col">

                <div className="flex flex-col">

                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#BCEF30] flex justify-center items-center rounded-full">1</div>
                        <h2 className="font-['Open_Sans'] ml-2 font-semibold md:text-xl md:ml-4">Metodologia</h2>
                    </div>

                    <div className="w-full flex flex-col mt-12 md:flex-row md:justify-between">
                        <h1 className="font-['Open_Sans'] text-4xl font-bold lg:text-5xl">O que você <br /> vai aprender</h1>
                        <p className="mt-8 font-['inter'] md:mt-0 md:w-80 lg:w-96 lg:text-xl">Com mais de 4 módulos e 800 horas de conteúdo, você vai ver como o mercado financeiro funciona e como atuar nele.</p>
                    </div>

                </div>

                <div className="w-full mt-12 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-4 lg:grid-cols-4">

                    <div className="h-72 p-4 bg-[#080808] flex flex-col justify-between rounded-md cursor-pointer transition ease duration-500 hover:scale-105 md:w-auto">
                        <p className="text-[#FFF]">01</p>
                        <div>
                            <h3 className="font-['Open_Sans'] text-[#BCEF30] font-bold">Mercado Financeiro</h3>
                            <p className="text-[#FFF] font-['inter'] text-xs">30 aulas nesse Módulo</p>
                        </div>
                    </div>

                    <div className="h-72 p-4 bg-[#080808] flex flex-col justify-between rounded-md cursor-pointer transition ease duration-500 hover:scale-105 md:flex-1">
                        <p className="text-[#FFF]">02</p>
                        <div>
                            <h3 className="font-['Open_Sans'] text-[#BCEF30] font-bold">Economizar e investir</h3>
                            <p className="text-[#FFF] font-['inter'] text-xs">20 aulas nesse Módulo</p>
                        </div>
                    </div>

                    <div className="h-72 p-4 bg-[#080808] flex flex-col justify-between rounded-md cursor-pointer transition ease duration-500 hover:scale-105 md:flex-1">
                        <p className="text-[#FFF]">03</p>
                        <div>
                            <h3 className="font-['Open_Sans'] text-[#BCEF30] font-bold">Corretoras e fundos</h3>
                            <p className="text-[#FFF] font-['inter'] text-xs">25 aulas nesse Módulo</p>
                        </div>
                    </div>

                    <div className="h-72 p-4 bg-[#080808] flex flex-col justify-between rounded-md cursor-pointer transition ease duration-500 hover:scale-105 md:flex-1">
                        <p className="text-[#FFF]">04</p>
                        <div>
                            <h3 className="font-['Open_Sans'] text-[#BCEF30] font-bold">Segurança Financeira</h3>
                            <p className="text-[#FFF] font-['inter'] text-xs">15 aulas nesse Módulo</p>
                        </div>
                    </div>

                </div>

                <div className={styles.imageMethodology}>
                    <div className="w-full h-full border-2 border-solid border-[#BCEF30]"></div>
                </div>

            </article>

        </section>
    )
}