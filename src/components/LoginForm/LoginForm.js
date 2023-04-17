import './LoginForm.css'

const LoginForm = () => {
  return(
    <form className='form-container'>
      <h1 className='h1'>Please Enter Your Log In Info</h1>
      {/* <p class="login-error-message" id="loginError">Please Enter Valid Login Credentials</p> */}
      <input class="username" id="userName" type="text" placeholder="username" />
      <input class="password" id="password" type="text" placeholder="password" />
      <button class="login-button" id="loginButton">All Set</button>
    </form>
  )
}

export default LoginForm