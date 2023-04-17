import './Destinations.css'
import DestinationCard from '../DestinationCard/DestinationCard'

const Destinations = ({destinations}) => {

  // const destinationCards = destinations.destinations.map((destination, index) => {
  //   return(
  //     <DestinationCard 
  //       key={index}
  //       id={destination.id}
  //       destination={destination}
  //     />
  //   )
  // })

  return(
    <section className='destinations-container'>
      <h1>Where to next?</h1>
      <section>
        {/* {destinationCards} */}
      </section>
    </section>
  )
}

export default Destinations