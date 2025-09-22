import { MdLibraryBooks } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { ReactElement } from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { punchLines } from "@/app/utils";

const PunchLineCard = ({ text }: { text: string }): ReactElement => {
    return <div className="h-34 bg-[#fefae0]  rounded-xl flex flex-col relative items-center justify-start">
        <GoCheckCircleFill className="text-green-500 text-4xl relative -top-4" />

        <div className="w-full text-center font-bold">
            {text}
        </div>
    </div>
}

const About = () => {
    return (
        <div className="w-[55%]">
            <div className="grid grid-cols-4 gap-2 mb-8">
                {punchLines.map((line, index) => <PunchLineCard key={`PUNCH-LINE-${index}`} text={line} />)}
            </div>
            <h1 className="text-xl font-[500] pb-2 w-[25%] border-b-3 flex flex-row gap-2 text-amber-600 mb-4">
                <MdLibraryBooks className="relative top-1.5" /> About Us
            </h1>
            <p className="text-gray-500 font-[500] text-justify mb-4">
                At Bhargav Trading Co., we bring the richness of Indian craftsmanship and culinary heritage to markets worldwide. From premium spices to handcrafted wooden decor, soft cotton textiles, and eco-friendly paper goods — we offer products marked by quality, culture, and reliability.
            </p>
            <h1 className="text-xl font-[500] pb-2 w-[25%] border-b-3 flex flex-row gap-2 text-amber-600 mb-4">
                <FaQuestion className="relative top-1.5" /> Who We Are
            </h1>
            <p className="text-gray-500 font-[500] text-justify mb-8">
                We are a family-run business with <b>three generations of experience in global trade</b>. Our operations span sourcing from trusted artisans and farms, rigorous quality control, and modern packaging and export standards. Whether you’re a retailer, distributor, or importer, our goal is to deliver value, trust, and long-term partnership.
            </p>
        </div>
    )
}

export default About