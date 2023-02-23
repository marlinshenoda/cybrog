import './GamingLibraryCard.css'
import { SecondaryButton } from '../Buttons/Buttons'

const GamingLibraryCard = (props) => {
  return (
    <div className='gaming-library-card'>
        <ul>
            <li> <img src={props.image} alt='gameImage' /></li>
            <li>Data2 <span>{props.title}</span></li>
            <li>Date Added <span>{props.date}</span></li>
            <li>Hours Played <span>{props.hours}</span></li>
            <li>Currently <span>{props.download}</span></li>
            <SecondaryButton>
                Download
              </SecondaryButton>
        </ul>
    </div>
  )
}

export default GamingLibraryCard