import { MdEmail } from "react-icons/md";
import { FaPhoneAlt , FaWhatsapp } from "react-icons/fa";
import { email, mobile } from "@/app/utils";

const Contact = () => {
    return (
        <div className="w-full mt-20 flex justify-end items-center gap-4">
            <a href={`tel:+91${mobile}`} className="px-6 py-3 text-white text-xl rounded-lg font-bold cursor-pointer flex justify-center items-center gap-2 bg-amber-500">
                <FaPhoneAlt/> Contact Us
            </a>

            <a href={`mailto:${email}`} className="px-6 py-3 text-white text-xl rounded-lg font-bold cursor-pointer flex justify-center items-center gap-2 bg-amber-500">
                <MdEmail/> Email Us
            </a>

            <a target='_blank' href={`https://wa.me/91${mobile}`} className="px-6 py-3 text-white text-xl rounded-lg font-bold cursor-pointer flex justify-center items-center gap-2 bg-amber-500">
                <FaWhatsapp/> WhatsApp
            </a>
        </div>
    )
}

export default Contact