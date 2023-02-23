
import './GamingLibrary.css'
import {SectionHeader,SectionWrapper,GamingLibraryCard,PrimaryButton} from '../../components/Index';
import GamingLibraryData from '../../Data/GamingLibraryData';


const GamingLibrary = () => {
  const Cards = GamingLibraryData.map((card) => {
    return <GamingLibraryCard
    key={card.id}
    image={card.image}
    title={card.title}
    date={card.date}
    hours={card.hours}
    download={card.download}
    />
  })
     

  return (
    <>
      <SectionWrapper>
      <SectionHeader>Your Gaming <span>Library</span></SectionHeader>
      <div className="gaming-library-cards">
        {Cards}
      </div>
      <PrimaryButton className='main-button primary gaming-library-btn'>
      View Your Library
      </PrimaryButton>
    </SectionWrapper>
    </>
  )
}

export default GamingLibrary