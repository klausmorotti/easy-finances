import styles from '../../styles.module.css';

export const ObjectiveArea = () => {
    return (
        <section className="w-full p-4 bg-[#080808]">
            <article className="max-w-screen-xl mx-auto p-8 flex flex-col">

                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#BCEF30] flex justify-center items-center rounded-full">2</div>
                        <h2 className="font-['Open_Sans'] ml-2 text-[#FFF] font-semibold md:text-xl md:ml-4">O objetivo</h2>
                    </div>
                    <div className="mt-12 md:mt-0">
                        <h1 className="font-['Open_Sans'] text-4xl text-[#FFF] font-bold lg:text-5xl">Nosso Propósito</h1>
                        <div className="mt-8">
                            <p className="mb-4 leading-7 text-[#FFF] font-['inter'] text-left md:w-96">Desde 2016 atuando como escola de ensino sobre finanças categoria two stars. Umas das categorias mais cobiçadas no mundo dos negócios.</p>
                            <p className="mb-4 leading-7 text-[#FFF] font-['inter'] text-left md:w-96">Somos uma instituição que ensina atráves do metódo overclasses, que consiste em muito conteúdo, mas muita mão na massa, cada aprendizado é executado atráves de um exercício em seguida.</p>
                            <p className="leading-7 text-[#FFF] font-['inter'] text-left md:w-96">Desse jeito, o aluno aprende de forma direta e simplificada, buscando máxima performance, para entrar no mercado financeiro sabendo tudo de ponta a ponta.</p>
                        </div>
                    </div>

                </div>

                <div className={styles.imageObjective}>
                    <div className="flex-1 h-full border-l-2 border-b-2 border-solid border-[#BCEF30]"></div>
                    <div className="flex-1 h-full border-r-2 border-t-2 border-solid border-[#BCEF30]"></div>
                </div>
            </article>
        </section>
    )
}