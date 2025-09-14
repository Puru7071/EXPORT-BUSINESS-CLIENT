import { productCategories } from "@/app/utils"
import LazyImage from "../../../components/LazyImage"
import PortFolioDesc from "./PortFolioDesc"

const PortFolio = () => {
    return (
        <div className="w-[100%] h-auto mx-auto text-center relative">

            <h1 className="text-black text-5xl text-center font-bold mb-2 font-sans">Our Products</h1>
            <h4 className="text-gray-500 text-2xl italic font-[600] mb-20">Quality Products for Wholesale & Export</h4>

            {productCategories.map((product, index) => (
                <div
                    key={`PORTFOLIO-PRODUCT-CATEGORIES-${index}`}
                    className={`flex w-full mb-15 justify-center gap-20 ${index % 2 == 0 ? "flex-row" : "flex-row-reverse"}`}

                >
                    <LazyImage alt={product.imageSlugs} src={product.src} classes="w-64 h-72 rounded-2xl shadow-2xl " />
                    <PortFolioDesc heading={product.heading} description={product.description}/>
                </div>
            ))}

        </div>
    )
}

export default PortFolio