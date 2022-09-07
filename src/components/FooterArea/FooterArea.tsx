// Images
import TwitterIcon from '../../assets/icons/twitter-icon.png';
import InstagramIcon from '../../assets/icons/instagram-icon.png';
import LinkedInIcon from '../../assets/icons/linkedin-icon.png';
import CopyrightIcon from '../../assets/icons/copyright.png';

export const FooterArea = () => {
    const year = new Date();

    return (
        <footer className="p-12">
            <article className='max-w-screen-xl py-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className="flex-1 flex flex-col p-4">
                    <div>
                        <h1 className="font-['Open_Sans'] text-xl font-bold md:text-3xl">EasyFinances</h1>
                        <div className="my-4 flex items-center">
                            <img className="w-3 h-3 mr-2" src={CopyrightIcon} alt=""/>
                            <p className="flex font-['inter'] text-sm"> {year.getFullYear()} - Todos os direitos reservados</p>
                        </div>
                    </div>
                    <div className="flex">
                        <img className="w-10 mr-6 cursor-pointer" src={TwitterIcon} alt=""/>
                        <img className="w-10 mr-6 cursor-pointer" src={InstagramIcon} alt=""/>
                        <img className="w-10 cursor-pointer" src={LinkedInIcon} alt=""/>
                    </div>
                </div>

                <div className='flex-1 flex flex-col justify-between p-4'>
                    <h3 className='font-bold text-xl'>Ajuda</h3>
                    <a href="" className='mt-4'>Política de privacidade</a>
                    <a href="" className='mt-4'>Suporte do consumidor</a>
                    <a href="" className='mt-4'>Termos & condições</a>
                </div>
                
                <div className='flex flex-col justify-between flex-1 p-4'>
                    <h3 className='font-bold text-xl'>Informações</h3>
                    <a href="" className='mt-4'>FAQ</a>
                    <a href="" className='mt-4'>Serviços</a>
                    <a href="" className='mt-4'>Sobre</a>
                </div>

                <div className='flex-1 p-4'>
                    <h3 className="font-bold text-xl">Inscreva-se na nossa Newsletter</h3>
                    <div className='w-full flex mt-8'>
                        <input className='w-full border border-solid border-zinc-200 outline-0 rounded p-2' type="email" name="" id="" placeholder='Seu Email'/>
                        <input className='text-white bg-[#080808] rounded px-4 py-2' type="submit" value="Enviar" />
                    </div>
                </div>
            </article>
        </footer>
    )
}