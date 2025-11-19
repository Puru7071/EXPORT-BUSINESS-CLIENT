import Image from "next/image";

export default function GlobalLoader() {
    return (
        <div
            className="w-screen h-screen absolute top-0 left-0 flex flex-col justify-center items-center gap-10 bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: "url('/loading-bg.webp')" }}
        >
            {/* Light overlay for readability */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center gap-10">

                {/* Logo Box */}
                <span className="h-[50px] w-[140px] overflow-hidden flex justify-center items-center rounded-lg shadow-[1px_1px_1px_rgba(0,0,0,0.2)] bg-white">
                    <Image
                        src="/assets/logo.webp"
                        alt="Bhargava Trading Co."
                        className="object-contain"
                        width={250}
                        height={160}
                        unoptimized={process.env.NODE_ENV === 'development'}
                    />
                </span>

                {/* Smooth Loading Bar */}
                <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-gray-600 animate-loadingBar"></div>
                </div>

            </div>
        </div>
    );
}