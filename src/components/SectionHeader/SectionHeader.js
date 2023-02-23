import  './SectionHeader.css'

const SectionHeader = (props) => {
  return (
    <div>
        <div className='section-header'>
            <h4>{props.children}</h4>
      </div>
    </div>
  )
}

export default SectionHeader
