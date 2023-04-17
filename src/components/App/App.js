import HomePage from '../HomePage/HomePage';
import './App.css';
import getAPIData from '../../apiCalls';
import { useState } from 'react'

function App() {

  const [travelers, setTravelers] = useState([])
  const [trips, setTrips] = useState([])
  const [destinations, setDestinations] = useState([])

  const getAllData = (travelers, trips, destinations) => {
    Promise.all([getAPIData('travelers'), getAPIData('trips'), getAPIData('destinations')])
      .then((data) => {
        setTravelers(travelers)
        setTrips(trips)
        setDestinations(destinations)
        // addUsername()
        // loadPage()
      })
      .catch(err => console.log("To err is human", err))
  }

  return (
    <div className='app-container'>
      <HomePage 
      getAllData={getAllData}
      />
    </div>
  );
}

export default App;
