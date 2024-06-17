import React from 'react'
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

//Do not use the image in production

const data = [
  {
  id: 1,
  image: IMG1,
  title:"Amazon-Clone",
  github: "https://github.com/nandan-78/Amazon-Clone",
  demo: "https://github.com/nandan-78/Amazon-Clone"
},
  {
  id: 2,
  image: IMG2,
  title:"Authentication-System",
  github: "https://github.com/nandan-78/Authentication-system",
  demo: "https://github.com/nandan-78/Authentication-system"
},
  {
  id: 3,
  image: IMG3,
  title:"Multi Page E-Commerece Website",
  github: "https://github.com/nandan-78/Multipage-e-commerece-website",
  demo: "https://nandan-78.github.io/Multipage-e-commerece-website/"
},
  {
  id: 4,
  image: IMG4,
  title:"Todo - list",
  github: "https://github.com/nandan-78/todoList",
  demo: "https://nandan-78.github.io/todoList/"
},
  {
  id: 5,
  image: IMG5,
  title:"Weather app",
  github: "https://github.com/nandan-78/Weather_report",
  demo: "https://nandan-78.github.io/Weather_report/"
},
  {
  id: 6,
  image: IMG6,
  title:"Quiz App",
  github: "https://github.com/nandan-78/Qiuz_App",
  demo: "https://nandan-78.github.io/Qiuz_App/"
},

];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className="portfolio_item">
        <div className="portfolio_item_img">
        <img src={image} alt={title} />
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
          <a href={github} className="btn" target='_blank'>GitHub</a>
          <a href={demo} className="btn btn-primary" target='_blank'>Live demo</a>
          </div>
        </div>

         </article>
            )
          })
        }
      </div>
    </section>
  )  

   
}

export default Portfolio
