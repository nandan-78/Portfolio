import React from 'react'
import './Testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

function Qualification() {
  return (
   <section id="qualifications">
    <h5>Review from Clients</h5>
    <h2>qualifications</h2>
    <div className="container qualifications_container">
      <ariticle className="qualification">
        <div className="client_avatar">
          <img src={AVTR1} alt="AVtar One" />
        </div>
        <h5 className="client_name">Ernest Achiever</h5>
        <small className="client_review">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsam rerum, natus non minima perspiciatis dolor quo officia repellat dicta voluptate quos quaerat distinctio voluptatum nobis architecto necessitatibus nihil quas?
        </small>
         </ariticle>
      
      
      <ariticle className="qualification">
        <div className="client_avatar">
          <img src={AVTR1} alt="AVtar One" />
        </div>
        <h5 className="client_name">Ernest Achiever</h5>
        <small className="client_review">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsam rerum, natus non minima perspiciatis dolor quo officia repellat dicta voluptate quos quaerat distinctio voluptatum nobis architecto necessitatibus nihil quas?
        </small>
         </ariticle>
      
      
      <ariticle className="qualification">
        <div className="client_avatar">
          <img src={AVTR1} alt="AVtar One" />
        </div>
        <h5 className="client_name">Ernest Achiever</h5>
        <small className="client_review">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsam rerum, natus non minima perspiciatis dolor quo officia repellat dicta voluptate quos quaerat distinctio voluptatum nobis architecto necessitatibus nihil quas?
        </small>
         </ariticle>
     
     
      <ariticle className="qualification">
        <div className="client_avatar">
          <img src={AVTR1} alt="AVtar One" />
        </div>
        <h5 className="client_name">Ernest Achiever</h5>
        <small className="client_review">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsam rerum, natus non minima perspiciatis dolor quo officia repellat dicta voluptate quos quaerat distinctio voluptatum nobis architecto necessitatibus nihil quas?
        </small>
         </ariticle>
    </div>
   </section>

        
    
     
  )
}

export default Qualification
