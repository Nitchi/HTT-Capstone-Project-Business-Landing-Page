import { VscCircleFilled } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer(){

    return(

        <div id="contact" className="bg-green-950 flex flex-row items-center justify-center w-full py-5">
            <div className="flex flex-wrap items-center justify-center gap-2 text-gray-300 font-inter text-sm md:text-base">
                <a href="https://www.instagram.com/desweet_place?igsh=MTM4eTR0dG1qamM1Mw%3D%3D&utm_source=qr"
                    target="_blank">
                    <FaInstagram className="text-sm md:text-base cursor-pointer" /></a>
                
                <span>DeSweet Place</span>
                <VscCircleFilled className="text-[6px]" />

                <span>Fresh blends</span>
                <VscCircleFilled className="text-[6px]" />

                <span>Relish the taste.</span>

                <a href="https://wa.me/message/VHQ4Y4I36S5SG1"
                    target="_blank">
                    <FaWhatsapp className="text-sm md:text-base cursor-pointer"  />
                </a>    
            </div>

        </div>
    )
}

export default Footer;

