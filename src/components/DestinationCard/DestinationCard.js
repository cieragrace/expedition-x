import './DestinationCard.css'

const DestinationCard = ({destination}) => {
  return(
    <div className='destination-card-container'>
      <div className='destination-image'>{`${destination.image}`}</div>
      <h2 className='destination-name'>{`$destination.destination`}</h2>
    </div>
  )
}

export default DestinationCard