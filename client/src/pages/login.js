import Header from '../components/Header'
import '../styles/login.css'
import logo from '../picfiles/CPP-logo.png'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = () => {

    }

    return(<>
        <Header />
        <div className='login-panel'>
            <div className='login-form-container'>
                <form className='form' onSubmit={handleSubmit}>
                    <p id='title'>Log In to Title</p>
                    <p id='create-account-link'>New to Title? <a href='/create'>Sign Up</a></p>
                    <input type='email' className='text-box' onChange={ (e) => setEmail(e.target.value) } placeholder='Email'></input>
                    <input type='password' className='text-box' onChange={ (e) => setPassword(e.target.value) } placeholder='Password'></input>
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