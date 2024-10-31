import Image from 'next/image'
import './hero.css'

export default function Hero (){
    return(
        <div className="container">
        <div className="content-center">
          <h1 className="main-heading">Designer, Frontend Developer & Mentor</h1>
          <p className="description">I design and code beautifully simple things, and I love what I do.</p>
          <Image height={225} width={500} src="/images/hero-avatar.svg" alt="Hero" className='hero-img'quality={100}/>
          <Image height={450} width={820} src="/images/devices2.svg" alt="" className='devices-img  '  quality={100}/>
        </div>
      </div>
    )
} 