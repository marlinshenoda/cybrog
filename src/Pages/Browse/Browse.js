import './Browse.css'
import {FeaturedGames,TopDownloaded} from '../../sections/index'
const Browse = () => {
  return (
    <>
      <div className='streams-header'>
              <FeaturedGames/>
              <TopDownloaded/>

      </div>
    </>
  )
}

export default Browse
