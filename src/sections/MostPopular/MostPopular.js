import './MostPopular.css'
import {Card,SectionHeader,SectionWrapper} from '../../components/Index'
import MostPopularData from '../../Data/MostPopularData'


const MostPopular = (props) => {

  const cards = MostPopularData.map((card) => {
    return <Card
    key={card.id}
    title={card.title}
    subtitle={card.subtitle}
    image={card.image}
    rate={card.rate}
    download={card.download}
    />
  })

  return (
  <>
    <SectionWrapper> 
    <SectionHeader> Most Popular </SectionHeader>

      <div className='most-popular-items'>
      {cards}

      </div>
    </SectionWrapper>
    </>
  )
}

export default MostPopular
