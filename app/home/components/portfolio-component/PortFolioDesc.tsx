import Link from "next/link";
import { FaEye } from "react-icons/fa6";

const PortFolioDesc = ({ heading, description , href }: { heading: string, description: string , href : string}) => {
    return (
        <div className="w-130 flex flex-col justify-between items-start gap-2 max-md:w-full max-md:max-w-full max-md:items-center max-md:gap-2.5 max-md:px-2">
            <h1 className="text-3xl font-bold max-md:text-xl max-md:text-center">{heading}</h1>
            <h2 className="text-justify text-lg font-[500] text-gray-500 max-md:text-center max-md:text-sm max-md:leading-relaxed">
                {description}
            </h2>
            <Link href={href}>
                <div className="w-full flex justify-end items-center gap-2 text-[#fb8500] font-bold cursor-pointer max-md:justify-center max-md:text-sm">
                    <FaEye />
                    View Portfolio
                </div>
            </Link>
        </div>
    )
}

export default PortFolioDesc