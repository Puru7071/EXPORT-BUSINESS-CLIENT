import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { email, mobile } from "@/app/utils";
import { headers } from "next/headers";
import { getDesktopInfo } from "@/app/utils/util-functions";

const Contact = async () => {
    const headerList = await headers();
    const userAgent = headerList.get("user-agent") || "";

    const {desktopOS } = getDesktopInfo(userAgent);

    return (
        <div className={`w-full mt-20 flex justify-end items-center gap-4 max-md:mt-8 max-md:grid max-md:grid-cols-3 max-md:gap-2 ${desktopOS === "macOS" ? "" : "zoom-85"}`}>
            <a href={`tel:+91${mobile}`} className="px-6 py-3 text-white text-xl rounded-lg font-bold cursor-pointer flex justify-center items-center gap-2 bg-amber-500 max-md:px-2 max-md:py-2.5 max-md:gap-1 max-md:text-[11px] max-md:whitespace-nowrap">
                <FaPhoneAlt /> Contact Us
            </a>

            <a href={`mailto:${email}`} className="px-6 py-3 text-white text-xl rounded-lg font-bold cursor-pointer flex justify-center items-center gap-2 bg-amber-500 max-md:px-2 max-md:py-2.5 max-md:gap-1 max-md:text-[11px] max-md:whitespace-nowrap">
                <MdEmail /> Email Us
            </a>

            <a target='_blank' href={`https://wa.me/91${mobile}`} className="px-6 py-3 text-white text-xl rounded-lg font-bold cursor-pointer flex justify-center items-center gap-2 bg-amber-500 max-md:px-2 max-md:py-2.5 max-md:gap-1 max-md:text-[11px] max-md:whitespace-nowrap">
                <FaWhatsapp /> WhatsApp
            </a>
        </div>
    )
}

export default Contact