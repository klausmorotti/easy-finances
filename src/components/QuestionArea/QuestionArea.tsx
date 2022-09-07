import Eclipses from '../../assets/images/eclipses.png';

export const QuestionArea = () => {
    return (
        <section className="w-full p-4 bg-[#080808]">
            <article className="max-w-screen-xl mx-auto p-8 flex">
                <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-[#FFF] text-3xl font-semibold">EasyFinances</h3>
                    <h1 className="my-8 font-['Open_Sans'] text-5xl md:text-6xl font-bold text-[#FFF] ">Do zero ao <br /> <span className="font-bold text-[#BCEF30]">avançado</span></h1>
                    <a href="" className="w-60 md:w-72 py-2 border border-solid border-[#BCEF30] inline-flex justify-center font-bold rounded-full md:px-12 transition duration-500 hover:scale-105 text-[#FFF]"><p>Comece Agora</p>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17.8678L17 7.88062V17.8678M13 7.88062H7" stroke-width="2" stroke-linecap="round" stroke="#FFF" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>

                <div className="hidden md:flex-1 md:flex justify-end items-end">
                    <img className="flex-1 h-auto" src={Eclipses} alt="" />
                </div>
            </article>
        </section>
    )
}