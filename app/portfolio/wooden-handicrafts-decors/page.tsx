import React from 'react'
import { email } from '@/app/utils'
import CategoryPortfolio from '../components/Portfolio'

const page = () => {
  return (
    <CategoryPortfolio
      bannerText="Artisan Woodcraft - From India to the World."
      bannerColor="bg-[#F5EFE6]"
      bannerTextClass="text-[#3d2c1e]"
      emailButtonColor="bg-[#9a3412]"
      bannerHref="/assets/banners/wooden-handicrafts.png"
      bannerAlt="BANNER-IMAGE-WOODEN-HANDICRAFTS-BHARGAV-TRADING-CO"
      mail={`mailto:${email}?subject=Inquiry%20About%20Wooden%20Handicrafts%20%26%20Decors&body=Hello%20Mr.%20Bhargava%2C%0A%0AI%20came%20across%20your%20wooden%20handicrafts%20portfolio%20and%20would%20like%20to%20know%20more%20about%20your%20offerings.%0A%0ACould%20you%20please%20share%20details%20regarding%3A%0A-%20Available%20product%20types%20(boxes%2C%20decor%2C%20utensils%2C%20etc.)%0A-%20Pricing%20and%20bulk%20order%20terms%0A-%20Customization%20and%20finishes%0A-%20Delivery%20and%20shipping%20terms%0A%0ALooking%20forward%20to%20your%20response.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D%0A%5BYour%20Company%20Name%5D%0A%5BYour%20Country%5D`}
      table="wooden_handicrafts_portfolio"
      heading="Wooden Handicrafts & Decors"
      bucket="image-wooden-handicrafts-decors"
      cover= {false}
    />
  )
}

export default page
