import { FaEye } from "react-icons/fa6";

const PortFolioDesc = ({ heading, description }: { heading: string, description: string }) => {
    return (
        <div className="w-130 flex flex-col justify-between items-start gap-2">
            <h1 className="text-3xl font-bold">{heading}</h1>
            <h2 className="text-justify text-lg font-[500] text-gray-500">
                {description}
            </h2>
            <div className="w-full flex justify-end items-center gap-2 text-[#fb8500] font-bold cursor-pointer">
                <FaEye/>
                View Portfolio    
            </div>
        </div>
    )
}

export default PortFolioDesc