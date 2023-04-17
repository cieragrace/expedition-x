import HomePage from '../HomePage/HomePage'
import UsersPage from '../UsersPage/UserPage'
import './App.css'
import getAPIData from '../../apiCalls'
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom' 

function App() {

  const [travelers, setTravelers] = useState([])
  const [trips, setTrips] = useState([])
  const [destinations, setDestinations] = useState([])

  const getAllData = (travelers, trips, destinations) => {
    Promise.all([getAPIData('travelers'), getAPIData('trips'), getAPIData('destinations')])
    .then((data) => {
      setTravelers(data[0])
      setTrips(data[1])
      setDestinations(data[2])
      // addUsername()
    })
    .catch(err => console.log("To err is human", err))
}

  useEffect(() => {
    getAllData();
    console.log(destinations.destinations)
  }, []);

  // const addUsername = () => {
  //   const updatedTravelers = travelers.travelers.map(traveler => ({
  //       ...traveler, 
  //       username: `traveler${traveler.id}` 
  //   }));
  //   setTravelers(updatedTravelers);
  // }

  const getData = (travelerID) => {
    return travelers.travelers.find(currentUser => currentUser.id === travelerID)
  }

  const findTravelersFlights = () => {
    return trips.filter(trip => trip.userID === this.travelers.id)
  }


//   <div className='app-container'>
//   <Switch>
//     <Route
//     exact
//     path='/'
//     render={() => {
//       <HomePage 
//         getAllData={getAllData}
//         travelers={travelers}
//         trips={trips}
//         destinations={destinations}
//       />
//     }}
//     />
//     <Route
//     exact
//     path='/userpage'
//     render={() => {
//       <UsersPage 
//         trips={trips}
//         destinations={destinations}
//       />
//     }}
//       />
//   </Switch>
// </div>
  return (
    <div className='app-container'>
      <UsersPage 
      trips={trips}
      destinations={destinations}
      />
    </div>
  );
}

export default App;
