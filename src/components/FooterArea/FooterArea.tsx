// Images
import TwitterIcon from '../../assets/icons/twitter-icon.png';
import InstagramIcon from '../../assets/icons/instagram-icon.png';
import LinkedInIcon from '../../assets/icons/linkedin-icon.png';

export const FooterArea = () => {
    return (
        <footer className="p-12">
            <div>
                <div>
                    <h1 className="text-xl font-bold">EasyFinances</h1>
                    <p className="text-sm mt-2">@ 2022 - Todos os direitos reservados</p>
                </div>

                <div className="mt-8 flex justify-between">
                    <img className="cursor-pointer" src={TwitterIcon} alt="" width={40}/>
                    <img className="cursor-pointer" src={InstagramIcon} alt="" width={40}/>
                    <img className="cursor-pointer" src={LinkedInIcon} alt="" width={40}/>
                </div>
            </div>
        </footer>
    )
}