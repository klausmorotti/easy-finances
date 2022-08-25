// Images
import ArrowUpRight from '../../assets/icons/arrow-up-right-icon.png';

export const QuestionArea = () => {
    return (
        <section className="w-full p-4 bg-[#080808]">
            <article className="p-8 flex flex-col">
                <h1 className="text-5xl leading-normal font-bold">Do zero ao avançado, <span className="font-bold text-[#BCEF30]">invista.</span></h1>
                <a href="" className="mt-12 py-2 bg-[#BCEF30] flex justify-center font-bold rounded-full"><p>Comece Agora</p> <img src={ArrowUpRight} className="ml-2" alt="" width={15} height={15}/> </a>
            </article>
        </section>
    )
}