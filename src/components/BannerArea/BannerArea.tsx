// Images
import ArrowUpRight from '../../assets/icons/arrow-up-right-icon.png';

export const BannerArea = () => {
    return (
        <section className="w-full h-auto mt-20 bg-[#080808] p-4 ">

            <article className="h-auto p-8 flex flex-col">

                <div className="h-auto">

                    <h1 className="text-5xl font-bold leading-tight text-[#FFF]">Aprenda como investir o seu <span className="text-[#BCEF30]">dinheiro.</span></h1>

                    <div className="mt-12 flex flex-col">
                        <div className="flex-1 mb-12">
                            <h3 className="text-4xl font-bold text-[#BCEF30] text-center">92%</h3>
                            <p className="mt-2 text-[#FFF] text-center">De aprovação <br /> pelo MFU</p>
                        </div>
                        <div className="flex-1 mb-12">
                            <h3 className="text-4xl font-bold text-[#BCEF30] text-center">9.2/10</h3>
                            <p className="mt-2 text-[#FFF] text-center">De avaliação <br /> no Google</p>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-4xl font-bold text-[#BCEF30] text-center">70.000</h3>
                            <p className="mt-2 text-[#FFF] text-center">Alunos e alunas <br /> em todo Brasil</p>
                        </div>
                    </div>

                </div>

                <div className="mt-16">
                    <p className="text-center text-[#FFF]">Do básico ao avançado em poucas semanas, invista com segurança, acessibilidade e zero democracia!</p>
                    <a href="" className="mt-8 py-2 bg-[#BCEF30] flex justify-center font-bold rounded-full"><p>Comece Agora</p> <img src={ArrowUpRight} className="ml-2" alt="" width={15} height={15}/> </a>
                </div>

            </article>

        </section>
    )
}