import  './FeaturedGames.css'
import { LiveStreamsCard, SectionHeader, SectionWrapper  } from '../../components/Index'
import LiveStreamsData from '../../Data/LiveStreamsData'

const FeaturedGames = () => {
    const card = LiveStreamsData.map((card) =>{
        
        return <LiveStreamsCard
    key={card.id}
    title={card.title}
    subtitle={card.subtitle}
    image={card.image}
    rate={card.rate}
    download={card.download} 
       />   
      })
 
   
  return (
    <div className='live-streams'>
    <SectionWrapper>
            <SectionHeader>Featured <span>Games</span></SectionHeader>
            <div className='featured-games-items'>
                {card}
            </div>
    </SectionWrapper>
    </div>
  )
}

export default FeaturedGames
