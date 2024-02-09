import Header from '../components/Header'
import '../styles/login.css'
import logo from '../picfiles/CPP-logo.png'

function Login() {

    return(<>
        <Header />
        <div className='login-panel'>
            <div className='login-form-container'>
                <form className='form'>
                    <p id='title'>Log In to Title</p>
                    <p id='create-account-link'>New to Title? <a href='/create'>Sign Up</a></p>
                    <input type='email' className='text-box' placeholder='Email'></input>
                    <input type='password' className='text-box' placeholder='Password'></input>
                    <br/>
                    <button type='submit' className='login-btn'>Log In</button>
                </form>
            </div>
        </div>

        <div className='img-panel'>
            <img src={logo} className='logo' alt=''></img>
        </div>
    
    </>)
}

export default Login;