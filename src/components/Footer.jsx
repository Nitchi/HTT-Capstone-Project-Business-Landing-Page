import { VscCircleFilled } from "react-icons/vsc";

function Footer(){

    return(

        <div className="bg-green-950 flex flex-row items-center justify-center w-full py-5">
            <div className="flex flex-wrap items-center justify-center gap-2 text-gray-300 font-inter text-sm md:text-base">
                <span>DeSweet Place</span>
                <VscCircleFilled className="text-[6px]" />

                <span>Fresh blends</span>
                <VscCircleFilled className="text-[6px]" />

                <span>Relish the taste.</span>
            </div>

        </div>
    )
}

export default Footer;

