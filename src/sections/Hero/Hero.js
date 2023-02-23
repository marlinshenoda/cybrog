import  './Hero.css'
import { PrimaryButton } from '../../components/Index'

const Hero = () => {
  return (
 <div className='hero-main'>
<div className='her-text'>
<h6 className='hero-subtitle'>Welcome To Cyborg</h6>
<h4 className='hero-title'><em>Browse</em>Our Popular Game Hero</h4>
<PrimaryButton className='main-button primary hero-btn'>
            Browse Now
 </PrimaryButton>
</div>
 </div>
  )
}

export default Hero
