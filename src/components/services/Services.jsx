import React from 'react'
import './Services.css';
import {BsCheck} from 'react-icons/bs';

import gfg from '../../assets/gfg.png';
import leetcode from '../../assets/leetcode.png';
import codeStudio from '../../assets/codeStudio.png'

function Services() {
  return (
   <section id="services">
   <h5>My Coding Profiles</h5>
   <h2>Coding Profiles</h2> 

   <div className="container services_container">
    <article className="service">
      <div className="service_head">
       <h3>Geeks for Geeks</h3>
      </div>

      <ul className="service_list">
      <li className="service_list_icon">
        <BsCheck />
        {/* <h3>I have solved more than 400 DSA question on Geeks for Geeks</h3> */}
        <img src={gfg}alt="" style={{paddingRight:"30px"}} />
      </li>
     
      {/* <Link to="/https://auth.geeksforgeeks.org/user/nitinnaqteh">GFG Profile</Link> */}
      <a href="https://auth.geeksforgeeks.org/user/nitinnaqteh" target='blank' style={{margin:"70px"}}>GFG Profile Link</a>

      </ul>
    </article>
    {/* End of UI/UX */}
    
    
    <article className="service">
      <div className="service_head">
       <h3>Leet Code Profile</h3>
      </div>

      <ul className="service_list">
      <li className="service_list_icon">
        <BsCheck />
        <img src={leetcode}alt="" style={{paddingRight:"30px" }}/>
      </li>
      <a href="https://leetcode.com/u/nandan_78/" target='blank' style={{margin:"70px"}}>LeetCode Profile</a>
      

      </ul>
    </article>
    {/* End of Web development */}
    
    
    <article className="service">
      <div className="service_head">
       <h3> Content Creation</h3>
      </div>

      <ul className="service_list">
      <li className="service_list_icon">
        <BsCheck />
        <img src={codeStudio} alt="" style={{paddingRight:'30px', paddingLeft:"5px"}} />
      </li>
     <a href="https://www.naukri.com/code360/profile/85e10e51-0581-4db6-bbda-285749c0582e" target='blank' style={{marginLeft:"50px"}}>Coding Ninzas Profile</a>
    

      </ul>
    </article>
    {/* End ofContent Creation */}


   </div>

   </section>
  )
}

export default Services
