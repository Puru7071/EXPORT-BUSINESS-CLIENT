import React from 'react'
import { email } from '@/app/utils'
import CategoryPortfolio from '../components/Portfolio'

const page = () => {
  return (
    <CategoryPortfolio
        bannerText='From Office Desks to Dining Tables - Quality Paper Products.'
        bannerColor='bg-[#EBF2FA]'
        bannerTextClass='text-[black]'
        emailButtonColor='bg-[#05668D]'
        bannerHref='/assets/banners/paper.png'
        bannerAlt='BANNER-IMAGE-PAPER-BHARGAV-TRADING-CO'
        table='paper_portfolio'
        bucket='images-paper-portfolio'
        heading='Explore Our Paper Essentials'
        mail={`mailto:${email}?subject=Inquiry%20About%20Your%20Paper%20Products&body=Hello%20Mr.%20Bhargava%2C%0A%0AI%20visited%20your%20paper%20products%20portfolio%20and%20would%20like%20to%20know%20more%20about%20your%20offerings.%0A%0ACould%20you%20please%20share%20details%20regarding%3A%0A-%20Available%20paper%20product%20types%0A-%20Pricing%20(per%20kg%20or%20per%20unit)%0A-%20Bulk%20order%20options%0A-%20Delivery%20and%20shipping%20terms%0A%0ALooking%20forward%20to%20your%20response.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D%0A%5BYour%20Company%20Name%5D%0A%5BYour%20Country%5D`}

    />
  )
}

export default page