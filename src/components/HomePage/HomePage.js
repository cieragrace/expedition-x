import './HomePage.css'
import LoginForm from '../LoginForm/LoginForm'

const HomePage = ({getAllData, travelers, trips, destinations}) => {
  return(
    <div className='homepage-container'>
      <section className="grid-box one"></section>
      <section className="grid-box two"></section>
      <section className="grid-box three"></section>
      <section className="grid-box four"></section>
      <section className="grid-box five" id="form">
        <LoginForm 
          className='formbox'
          travelers={travelers}
          trips={trips}
          destinations={destinations}
          getAllData={getAllData}
          />
      </section>
      <section className="grid-box six"></section>
      <section className="grid-box seven"></section>
      <section className="grid-box eight"></section>
      <section className="grid-box nine"></section>
    </div>
  )
}

export default HomePage