import { VscCircleFilled } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer(){

    return(

        <div id="contact" className="bg-green-950 flex flex-row items-center justify-center w-full py-5">
            <div className="flex flex-wrap items-center justify-center gap-2 text-gray-300 font-inter text-sm md:text-base">
                <a></a><FaInstagram className="text-sm md:text-base cursor-pointer" /><a/>
                <span>DeSweet Place</span>
                <VscCircleFilled className="text-[6px]" />

                <span>Fresh blends</span>
                <VscCircleFilled className="text-[6px]" />

                <span>Relish the taste.</span>
                <FaWhatsapp className="text-sm md:text-base cursor-pointer"  />
            </div>

        </div>
    )
}

export default Footer;

