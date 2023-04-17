import './UserPage.css'
import Header from '../Header/Header'
import Destinations from '../Destinations/Destinations'
import Trips from '../Trips/Trips'

const UserPage = () => {
  return(
    <div className='userpage-container'>
      <Header />
      <section className='places-container'>
        <Trips />
        <Destinations />
      </section>
    </div>
  )
}

export default UserPage