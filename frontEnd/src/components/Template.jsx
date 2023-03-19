import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Service } from './Service'
import { Pricing } from './Pricing'
import { Contact } from './Contact'
import { ClientLogo } from './ClientLogo'
import { Testimonial } from './Testimonial'
import { Subscribe } from './Subscribe'





export const Template = () => {

  return (
    <div>
      <>
        <Header />
        <Service />
        <Pricing />
        <Subscribe />
        <Testimonial />
        <ClientLogo />
        <Contact />
        <Footer />
        <a className="back-to-top" href="#">
          <i className="lni-chevron-up" />
        </a>
      </>
    </div>
  )
}
