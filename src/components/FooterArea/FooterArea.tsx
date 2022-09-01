// Images
import TwitterIcon from '../../assets/icons/twitter-icon.png';
import InstagramIcon from '../../assets/icons/instagram-icon.png';
import LinkedInIcon from '../../assets/icons/linkedin-icon.png';
import CopyrightIcon from '../../assets/icons/copyright.png';

export const FooterArea = () => {
    const year = new Date();

    return (
        <footer className="p-12">
            <div className="max-w-screen-xl mx-auto">
                <div>
                    <h1 className="font-['Open_Sans'] text-xl font-bold md:text-3xl">EasyFinances</h1>
                    <div className="mt-2 flex items-center md:mt-4">
                        <img className="w-3 h-3 mr-2" src={CopyrightIcon} alt=""/>
                        <p className="flex font-['inter'] text-sm"> {year.getFullYear()} - Todos os direitos reservados</p>
                    </div>
                </div>

                <div className="mt-8 flex justify-between md:justify-start">
                    <img className="w-10 cursor-pointer md:mr-20 md:w-14" src={TwitterIcon} alt=""/>
                    <img className="w-10 cursor-pointer md:mr-20 md:w-14" src={InstagramIcon} alt=""/>
                    <img className="w-10 cursor-pointer md:mr-20 md:w-14" src={LinkedInIcon} alt=""/>
                </div>
            </div>
        </footer>
    )
}