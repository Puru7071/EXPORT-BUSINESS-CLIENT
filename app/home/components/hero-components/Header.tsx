import Link from "next/link"
import {HeroHeaders } from '@/app/utils/index';
import Login from "./Login";
import Image from "next/image";


export default function Header() {
    return (
        <div className="w-full flex flex-row justify-between items-center ">
            <Link href="/home">
                <div className="h-[50px] w-[140px] overflow-hidden flex justify-center items-center rounded-lg">
                    <Image src="/assets/logo.webp" alt="Bhargava Trading Co." className="object-contain bg-white" width={250} height={160} />
                </div>
            </Link>

            <div className="flex flex-row justify-between items-center h-full w-[45%] text-white font-bold">
                <>
                    {HeroHeaders.map((header, index) =>
                        <Link href={header.url} key={`Hero-Header-${index}`} className="cursor-pointer hover:text-amber-600 transition-all duration-200">
                            {header.displayName}
                        </Link>
                    )}
                    <Login />
                </>
            </div>


        </div>)
}