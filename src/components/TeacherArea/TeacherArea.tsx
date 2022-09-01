import styles from '../../styles.module.css';

export const TeacherArea = () => {
    return (
        <section className="w-full p-4 bg-[#D9D9D9]">
            <article className="max-w-screen-xl mx-auto p-8 flex flex-col">

                <div className="flex flex-col">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#BCEF30] flex justify-center items-center rounded-full">3</div>
                        <h2 className="font-['Open_Sans'] ml-2 font-semibold md:text-xl md:ml-4">Professores</h2>
                    </div>
                    <div className="mt-12 flex flex-col md:flex-row md:justify-between">
                        <h1 className="font-['Open_Sans'] text-4xl text-[#080808] font-bold lg:text-5xl">Quem vai te ensinar</h1>
                        <p className="mt-4 font-['inter'] md:w-80 md:text-xl md:mt-0"><span className="font-bold">4 professores</span> especializados para levar a sua performance ao máximo, sem complicação e com muita fluidez!</p>
                    </div>
                </div>

                <div className="w-full mt-16 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-4 lg:grid-cols-4">

                    <div className={styles.imageProfessor1}>
                        <div>
                            <h3 className="font-['Open_Sans'] text-[#FFF] text-xl font-bold">Fernanda Cardoso</h3>
                            <p className="text-[#FFF] font-['inter'] text-sm">Professora de economia</p>
                        </div>
                    </div>

                    <div className={styles.imageProfessor2}>
                        <div>
                            <h3 className="font-['Open_Sans'] text-[#FFF] text-xl font-bold">João Victor</h3>
                            <p className="text-[#FFF] font-['inter'] text-sm">Professor de economia</p>
                        </div>
                    </div>

                    <div className={styles.imageProfessor3}>
                        <div>
                            <h3 className="font-['Open_Sans'] text-[#FFF] text-xl font-bold">Ana Tinetz</h3>
                            <p className="text-[#FFF] font-['inter'] text-sm">Professora de economia</p>
                        </div>
                    </div>

                    <div className={styles.imageProfessor4}>
                        <div>
                            <h3 className="font-['Open_Sans'] text-[#FFF] text-xl font-bold">Henrique Madete</h3>
                            <p className="text-[#FFF] font-['inter'] text-sm">Professor de economia</p>
                        </div>
                    </div>

                </div>
            </article>
        </section>
    )
}