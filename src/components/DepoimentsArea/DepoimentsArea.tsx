// Images
import ImagePerson1 from '../../assets/images/image-feedback-person1.png';
import ImagePerson2 from '../../assets/images/image-feedback-person2.png';
import ImagePerson3 from '../../assets/images/image-feedback-person3.png';
import ArrowNextIcon from '../../assets/icons/arrow-next-icon.png';
import ArrowPrevIcon from '../../assets/icons/arrow-prev-icon.png';

// Events
import { useState } from 'react';

export const DepoimentsArea = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const PrevSlide = () => {
        if( currentSlide == 0 ) {
            setCurrentSlide(2);
        } else {
            setCurrentSlide( currentSlide - 1);
        }
    }
    const NextSlide = () => {
        if( currentSlide >= 0 && currentSlide < 2 ) {
            setCurrentSlide( currentSlide + 1 );
        } else {
            setCurrentSlide(0);
        }
    }

    return (
        <section className="w-full p-4 bg-[#FFF]">
            <article className="max-w-screen-xl mx-auto p-8 flex flex-col">

                <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#BCEF30] flex justify-center items-center rounded-full">4</div>
                    <h2 className="font-['Open_Sans'] ml-2 text-[#080808] font-semibold md:text-xl md:ml-4">Depoimentos</h2>
                </div>

                <div className="mt-12 overflow-hidden">
                    <div className="" style={{ width: '300%', display: 'flex', marginLeft:`-${100 * currentSlide}%`, transition:'all ease 0.5s'}} >
                        <div className="flex flex-col flex-1">
                            <p className="text-6xl text-[#D9D9D9]">"</p>

                            <blockquote className="font-['inter'] md:max-w-3xl">Um dos melhores investimentos da minha vida, foi um prazer poder ter feito esse curso, os professores são ótimos, recomendo para todos que quiserem aprender sobre o mercado financeiro!</blockquote>

                            <div className="mt-8 flex">
                                <img src={ImagePerson1} alt="" width={40} height={40} />
                                <div className="ml-4">
                                    <h3 className="font-['Open_Sans'] font-bold">Ana Clara</h3>
                                    <p className="font-['inter'] text-sm">Joinville - Santa Catarina</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col flex-1">
                            <p className="text-6xl text-[#D9D9D9]">"</p>

                            <blockquote className="font-['inter'] md:max-w-3xl">Um dos melhores investimentos da minha vida, foi um prazer poder ter feito esse curso, os professores são ótimos, recomendo para todos que quiserem aprender sobre o mercado financeiro!</blockquote>

                            <div className="mt-8 flex">
                                <img src={ImagePerson2} alt="" width={40} height={40} />
                                <div className="ml-4">
                                    <h3 className="font-['Open_Sans'] font-bold">João Paulo</h3>
                                    <p className="font-['inter'] text-sm">Belo Horizonte - Minas Gerais</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col flex-1">
                            <p className="text-6xl text-[#D9D9D9]">"</p>

                            <blockquote className="font-['inter'] md:max-w-3xl">Um dos melhores investimentos da minha vida, foi um prazer poder ter feito esse curso, os professores são ótimos, recomendo para todos que quiserem aprender sobre o mercado financeiro!</blockquote>

                            <div className="mt-8 flex">
                                <img src={ImagePerson3} alt="" width={40} height={40} />
                                <div className="ml-4">
                                    <h3 className="font-['Open_Sans'] font-bold">Marcela Tavares</h3>
                                    <p className="font-['inter'] text-sm">Osasco - São Paulo</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-8 flex justify-end">
                    <div className="w-8 h-8 mr-2 bg-[#080808] flex justify-center items-center rounded-full cursor-pointer"><img src={ArrowPrevIcon} alt="" width={25} onClick={PrevSlide}/></div>
                    <div className="w-8 h-8 bg-[#080808] flex justify-center items-center rounded-full cursor-pointer"><img src={ArrowNextIcon} alt="" width={25} onClick={NextSlide}/></div>
                </div>
            </article>
        </section >
    )
}