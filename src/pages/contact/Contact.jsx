import React from 'react'
import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsMessenger } from 'react-icons/bs'

function Contact() {
  return (
    <>
    <Header title='Get In Touch' image={HeaderImage}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis reiciendis qui quas distinctio cumque doloribus consectetur neque molestiae. Hic, consequuntur!
    </Header>
    <section className='contact'>
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href='anumahjoshuaeneye@gmail.com' target='_blank' rel='noreferrer noopener'>{<MdEmail/>}</a>
          <a href='https://m.me/joshanumah' target='_blank' rel='noreferrer noopener'>{<BsMessenger/>}</a>
          <a href='https://wa.me/+2348147895020' target='_blank' rel='noreferrer noopener'>{<IoLogoWhatsapp/>}</a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact