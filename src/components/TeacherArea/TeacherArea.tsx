export const TeacherArea = () => {
    return (
        <section className="w-full p-4 bg-[#D9D9D9]">
            <article className="p-8 flex flex-col">

                <div className="flex flex-col">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#BCEF30] flex justify-center items-center rounded-full">3</div>
                        <h2 className="ml-2 font-semibold">Professores</h2>
                    </div>
                    <p className="mt-8"><span className="font-bold">4 professores</span> especializados para levar a sua performance ao máximo, sem complicação e com muita fluidez!</p>
                </div>

                <div className="w-full mt-16  grid-cols-1">

                    <div className="w-full h-72 p-4 bg-[#080808] flex flex-col justify-end rounded-md cursor-pointer transition ease duration-500 hover:scale-105">
                        <div>
                            <h3 className="text-[#FFF] font-bold">Fernanda Cardoso</h3>
                            <p className="text-[#FFF] text-sm">Professora de economia</p>
                        </div>
                    </div>

                    <div className="w-full h-72 mt-4 p-4 bg-[#080808] flex flex-col justify-end rounded-md cursor-pointer transition ease duration-500 hover:scale-105">
                        <div>
                            <h3 className="text-[#FFF] font-bold">João Victor</h3>
                            <p className="text-[#FFF] text-sm">Professor de economia</p>
                        </div>
                    </div>

                    <div className="w-full h-72 mt-4 p-4 bg-[#080808] flex flex-col justify-end rounded-md cursor-pointer transition ease duration-500 hover:scale-105">
                        <div>
                            <h3 className="text-[#FFF] font-bold">Ana Tinetz</h3>
                            <p className="text-[#FFF] text-sm">Professora de economia</p>
                        </div>
                    </div>

                    <div className="w-full h-72 mt-4 p-4 bg-[#080808] flex flex-col justify-end rounded-md cursor-pointer transition ease duration-500 hover:scale-105">
                        <div>
                            <h3 className="text-[#FFF] font-bold">Henrique Madete</h3>
                            <p className="text-[#FFF] text-sm">Professor de economia</p>
                        </div>
                    </div>

                </div>
            </article>
        </section>
    )
}