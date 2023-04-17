import './HomePage.css'
import LoginForm from '../LoginForm/LoginForm'

const HomePage = ({getAllData}) => {
  return(
    <div className='homepage-container'>
      <LoginForm 
        getAllData={getAllData}
        />
      <section className="grid-box one"></section>
    <section className="grid-box two"></section>
    <section className="grid-box three"></section>
    <section className="grid-box four"></section>
    <section className="grid-box five" id="form">
      <LoginForm  className='formbox'/>
    </section>
    <section className="grid-box six"></section>
    <section className="grid-box seven"></section>
    <section className="grid-box eight"></section>
    <section className="grid-box nine"></section>
    </div>
  )
}

export default HomePage