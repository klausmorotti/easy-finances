import ImageBanner1 from '../../assets/images/image-banner-1.png';
import ImageBanner2 from '../../assets/images/image-banner-2.png';
import ImageBanner3 from '../../assets/images/image-banner-3.png';
import ImageBanner4 from '../../assets/images/image-banner-4.png';

export const BannerArea = () => {
    return (
        <section className="w-full h-auto mt-20 bg-[#080808] p-4 lg:px-0 relative">

            <article className="z-10 max-w-screen-xl h-auto mx-auto p-8 flex flex-col md:flex-row lg:px-0">

                <div className="h-auto md:w-3/5 md:mr-8 md:pl-4">

                    <h1 className="font-['Open_Sans'] text-5xl font-bold leading-tight text-[#FFF] lg:text-7xl">Aprenda como <br /> investir o seu <br /> <span className="text-[#BCEF30]">dinheiro.</span></h1>

                    <div className="mt-12 flex flex-col md:flex-row md:mt-20">
                        <div className="flex-1 mb-12 md:mb-0">
                            <h3 className="font-['Open_Sans'] text-4xl font-bold text-[#BCEF30] text-center md:text-left md:text-3xl lg:text-5xl">92%</h3>
                            <p className='mt-2 text-[#FFF] font-["inter"] text-center md:text-left md:text-sm lg:text-xl'>De aprovação <br /> pelo MFU</p>
                        </div>
                        <div className="flex-1 mb-12 md:mb-0">
                            <h3 className="font-['Open_Sans'] text-4xl font-bold text-[#BCEF30] text-center md:text-left md:text-3xl lg:text-5xl">9.2/10</h3>
                            <p className='mt-2 text-[#FFF] font-["inter"] text-center md:text-left md:text-sm lg:text-xl'>De avaliação <br /> no Google</p>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-['Open_Sans'] text-4xl font-bold text-[#BCEF30] text-center md:text-left md:text-3xl lg:text-5xl">70.000</h3>
                            <p className='mt-2 text-[#FFF] font-["inter"] text-center md:text-left md:text-sm lg:text-xl'>Alunos e alunas <br /> em todo Brasil</p>
                        </div>
                    </div>

                </div>

                <div className="mt-16 md:w-2/5 md:mt-0 md:ml-8 md:pr-4">
                    <p className='text-center text-[#FFF] font-["inter"] md:text-left md:text-xl'>Conheça uma forma de investir através de um metódo totalmente inovador. Do básico ao avançado em poucas semanas, invista com segurança, acessibilidade e sem complicação!</p>
                    <a href="" className=' font-["inter"] mt-8 py-4 border border-solid border-[#BCEF30] flex justify-center font-bold rounded-full md:inline-flex md:text-base md:px-8 transition duration-500 hover:scale-105 text-[#FFF]'><p>Comece Agora</p>

                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17.8678L17 7.88062V17.8678M13 7.88062H7" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </a>
                </div>

            </article>

        </section>
    )
}