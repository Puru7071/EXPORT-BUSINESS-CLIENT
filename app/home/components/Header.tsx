import Link from "next/link"
import { images, HeroHeaders } from '@/app/utils/index';
import Login from "./Login";


export default function Header() {
    return (
        <div className="h-28 w-full flex flex-row justify-between items-center">
            <Link href="/home">
                <div className="h-[50px] w-[140px] overflow-hidden flex justify-center items-center rounded-lg">
                    <img src={images.logo} alt="Bhargava Enterprizes" className="h-[160px] w-[250px] object-contain bg-white " />
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