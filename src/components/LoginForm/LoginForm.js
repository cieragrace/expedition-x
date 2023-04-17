import './LoginForm.css'
import { Link } from 'react-router-dom'

const LoginForm = ({getAllData}) => {
  return(
    <form className='form-container'>
      <h1 className='h1'>Please Enter Your Log In Info</h1>
      {/* <p class="login-error-message" id="loginError">Please Enter Valid Login Credentials</p> */}
      <input 
        className="username" 
        id="userName" 
        type="text" 
        placeholder="username" 
        />
      <input 
        className="password" 
        id="password" 
        type="text" 
        placeholder="password" />
      <div className='login-button'>
        <Link to='/profile/:userID' className="userpage-link" id="loginButton">All Set</Link>
      </div>
    </form>
  )
}

export default LoginForm