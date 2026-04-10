import React from 'react'
import { email } from '@/app/utils'
import CategoryPortfolio from '../components/Portfolio'

const page = () => {
  return (
    <CategoryPortfolio
      bannerText="Staple Grains, Pulses & Oils — Trusted Quality for Global Trade."
      bannerColor="bg-[#F8F5EF]"
      bannerTextClass="text-[#3d2914]"
      emailButtonColor="bg-[#6b4f1d]"
      bannerHref="/assets/banners/food-commodities.png"
      bannerAlt="BANNER-IMAGE-FOOD-COMMODITIES-BHARGAV-TRADING-CO"
      mail={`mailto:${email}?subject=Inquiry%20About%20Food%20Commodities%20Portfolio&body=Hello%20Mr.%20Bhargava%2C%0A%0AI%20came%20across%20your%20food%20commodities%20portfolio%20and%20would%20like%20to%20know%20more%20about%20your%20offerings.%0A%0ACould%20you%20please%20share%20details%20regarding%3A%0A-%20Available%20commodity%20types%20(rice%2C%20pulses%2C%20grains%2C%20oils%2C%20etc.)%0A-%20Pricing%20and%20bulk%20order%20terms%0A-%20Packaging%20and%20quality%20specifications%0A-%20Delivery%20and%20shipping%20terms%0A%0ALooking%20forward%20to%20your%20response.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D%0A%5BYour%20Company%20Name%5D%0A%5BYour%20Country%5D`}
      table="food_commodities_portfolio"
      heading="Few of Our Food Commodities"
      bucket="images-food-commodities"
    />
  )
}

export default page
