import React from 'react'
import bg from '/Users/vallabhpatil777/Documents/portfolio/portfolio/src/assets/Image.png'
import './intro.css'
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro" >
<div className='introContent'>
    <span className='hello'>Hello,</span>
    <span className='introText'>I'm <span className='introName'>Vallabh</span><br/>Software Developer</span>
    <p className='introPara'>Passionate about building scalable web applications and working on innovative projects.<br/>Always eager to learn and explore new technologies</p>
    <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
</div>
<img src={bg} alt='' className='bg'/>
    </section>
  )
}

export default Intro