import React from 'react'
import { email } from '@/app/utils'
import CategoryPortfolio from '../components/Portfolio'

const page = () => {

    return (
        <CategoryPortfolio
            bannerText="Bringing the Essence of India's Finest Spices to the World..."
            bannerHref='/assets/banners/spices.png'
            bannerAlt='BANNER-IMAGE-SPICES-BHARGAV-TRADING-CO'
            mail={`mailto:${email}?subject=Inquiry%20About%20Indian%20Spices%20Portfolio&body=%20Hello%20Mr.%20Bhargava%2C%0A%0AI%20came%20across%20your%20spices%20portfolio%20and%20I%E2%80%99m%20interested%20in%20learning%20more%20about%20your%20products.%20Please%20share%20details%20about%20your%20spice%20varieties%2C%20export%20pricing%2C%20and%20shipping%20terms.%0A%0ALooking%20forward%20to%20your%20response.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D%0A%5BYour%20Company%20Name%5D%0A%5BYour%20Country%5D`}
            table="species_portfolio"
            heading="Discover Our Range of Spices"
            bucket='images-spices-portfolio'
        />
    )
}

export default page