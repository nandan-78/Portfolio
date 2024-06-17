import React ,{useRef} from 'react'
import './Contact.css';
import{HiMail} from 'react-icons/hi';
// import{BiLogoTelegram} from 'react-icons/bi';
import{FaWhatsapp} from 'react-icons/fa';
// import {emailjs} from 'emailjs';

function Contact() {
  
    // const form = useRef();
  
    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('service_sxqcltd', 'template_fa9km3yh', form.current, 'XovohN9DbeY4FGv-6')
        
    //     };
   
    
  return (
   <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container ">
    <div className="contact_options">
    <article className="contact_option">
     <HiMail className='contact_option-icon' />
      <h4>Email</h4>
      <h5>nitinnandan@yahoo.com</h5>
      <a href="mailto:nitinnandan@yahoo.com" target='blank'>Send a Message</a>
    </article>
    {/* <article className="contact_option">
     <BiLogoTelegram className='contact_option-icon' />
      <h4>Telegram</h4>
      <h5>+91 7800179767</h5>
      <a href="https://web.telegram.org/a/send?phone=7800179767" target='blank'>Send a Message</a>
    </article> */}
    <article className="contact_option">
     <FaWhatsapp className='contact_option-icon' />
      <h4>What's App</h4>
      <h5>+91 7800179767</h5>
      <a href="https://api.whatsapp.com/send?phone=7800179767" target='blank'>Send a Message</a>
    </article>

    </div>
    {/* End of contact options */}
    <form  onSubmit>
      <input type="text" name='name' placeholder='Your Full Name' required />
      <input type="email" name='email' placeholder='Your Email Address' required />
      <textarea name="message"   rows="7" placeholder='Your Message...' required></textarea>
      <button type='submit' className="btn btn-primary">Send Message</button>

    </form>
    </div>


   </section>
  )

  }
export default Contact;
