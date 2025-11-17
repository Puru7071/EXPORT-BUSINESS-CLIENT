import SectionHeading from "@/app/utils-components/SectionHeading"

const About = () => {
    return (
        <div className="w-[55%] py-10">
            <SectionHeading heading = {"BHARGAV TRADING CO."} />
            <p className="text-gray-500 text-base font-[600] text-justify mb-4 tracking-wide">
                At Bhargav Trading Co., we bring the richness of India’s craftsmanship and culinary heritage to markets across the globe. From premium spices and soft cotton textiles to handcrafted wooden decor and eco-friendly paper products, our offerings reflect quality, authenticity, and tradition. 
                
                <br></br>
                <br></br>
                
                As a family-run business with three generations of experience in global trade, we carefully source products from trusted artisans and farms, apply rigorous quality control, and ensure modern packaging and export standards. Whether you are a retailer, distributor, or importer, our mission is to deliver value, reliability, and long-term partnerships, making India’s finest products accessible to the world.
            </p>
        </div>
    )
}

export default About