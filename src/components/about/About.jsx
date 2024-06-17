import React from 'react'
import './About.css';
import ME from '../../assets/me1.png.png';
import {FaAward} from 'react-icons/fa'
import {MdOutlineWork} from 'react-icons/md'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id="about">
    <h5>Get To Know </h5>
    <h2>About Me</h2>
    <div className="container about_container">
      <div className="about_me">
      <div className="abuot_me_img">
          <img src={ME} alt="About me" />
        </div>

      </div>

      <div className="about_content">
      <div className="about_cards">
        <article className="about_card">
        <FaAward className='about_icon' />
          <h5>Experience</h5>
          <small>Fresher</small>
        </article>
       
        <article className="about_card">
        <MdOutlineWork className='about_icon' />
          <h5>Internship</h5>
          <small>Sync Intern's</small>
        </article>
       
        <article className="about_card">
        <VscFolderLibrary className='about_icon' />
          <h5>Projects</h5>
          <small>10+ Projects</small>
        </article>
          
      </div>
       
       {/* <h4>Name : <span >Nitin Nandan</span></h4>
       <h4>Course : <span>Bachlor of Thecnology</span></h4>
       <h4>Branch : <span>Electronics and Communication Engineering</span></h4>
       <h4>College: <span>M.M.M.U.T. Gorakhpur</span></h4> */}
       <h2><span style={{marginTop:"20px", display:"flex" , justifyContent:"center", }}>Hello There !</span></h2><br/> 
       <p s>Hey! My self <span >Nitin Nandan </span> </p> <br />
       <p>I am from Sant Kabir Nagar, UP.</p><br/>
       <p>Talking about my educational background , I am pursuing B.tech from Madan Mohan Malviya University of Technology , Gorakhpur , UP in (ELectronic and Communication Engineering).</p> <br/>
       <p>I have also completed diploma in ELectrical Engineering from M.M.I.T Sant Kabir Nagar.</p><br/>
       <p>I am a "Full Stack Web Developer (MERN)" and polishing myself to become a successful "MERN developer". </p><br/>
       <p>My biggest strength is ADAPTABILIY as the situation is always change,
          I am ready to ADAPT new changes.</p> <br/>
        <p>I'm a self motivated personality who is sociable with all.</p>


       
       

       {/* <div className="cta">
           <a href="#contact" className='btn btn-primary'>Let's Talk</a>
           </div> */}
           
      
      </div>
    
    </div>

    </section>
  )
}

export default About;
