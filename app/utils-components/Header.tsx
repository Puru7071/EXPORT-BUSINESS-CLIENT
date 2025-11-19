import { HeroHeaders } from '@/app/utils/index';
import Login from "./Login";
import Image from "next/image";
import Link from 'next/link';


export default function Header({ isLayout = false , zoom = false }: { isLayout?: boolean ,zoom ?: boolean }) {
    return (
        <div className={`w-full flex flex-row justify-between items-center ${zoom ? "zoom-85" : ""} ${isLayout ? "w-full px-12 py-6 fixed mx-auto bg-white shadow-[0_2px_2px_rgba(220,220,180,0.2)] z-[100]" : ""}`}>
            <Link href="/home" className="block">
                <span className={`h-[50px] w-[140px] overflow-hidden flex justify-center items-center rounded-lg ${isLayout ? "shadow-[1px_1px_1px_rgba(0,0,0,0.2)]" : ""}`}>
                    <Image
                        src="/assets/logo.webp"
                        alt="Bhargava Trading Co."
                        className="object-contain bg-white"
                        width={250}
                        height={160}
                        unoptimized={process.env.NODE_ENV === 'development'} // Optional: helps with dev mode
                    />
                </span>
            </Link>

            <div className={`flex flex-row justify-between items-center h-full w-[45%] font-bold ${isLayout ? "text-gray-500" : "text-white"}`}>
                <>
                    {HeroHeaders.map((header, index) =>
                        <Link href={header.url} key={`Hero-Header-${index}`} className="cursor-pointer hover:text-amber-600 transition-all duration-200">
                            {header.displayName}
                        </Link>
                    )}
                    <Login isLayout={isLayout} />
                </>
            </div>

        </div>)
}