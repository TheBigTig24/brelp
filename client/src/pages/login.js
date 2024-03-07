import Header from '../components/Header'
import '../styles/login.css'
import logo from '../picfiles/CPP-logo.png'
import { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function Login() {

    const [theId, setTheId] = useState(-1)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = "http://localhost:4000/users/user/bob?email=" + email + "&password=" + password
        axios.get(url)
            .then((res) => {
                console.log(email, password)
                if ( (res.data[0].email == email) && (res.data[0].password == password) ) {
                    console.log("i love hanni")
                    localStorage.setItem('userId', res.data[0].userId)
                    navigate("/dashboard")
                }
            }).catch((error) => {
                document.getElementById('error-msg').innerHTML = "Username or Password is incorrect"
                console.log(error)
            })
    }

    return(<>
        <Header />
        <body>
        <div className='login-panel'>
            <div className='login-form-container'>
                <form className='form-1' onSubmit={handleSubmit}>
                    <p id='title'>Log In to Title</p>
                    <p id='create-account-link'>New to Title? <a href='/create'>Sign Up</a></p>
                    <input type='email' className='text-box' onChange={ (e) => setEmail(e.target.value) } placeholder='Email'></input>
                    <input type='password' className='text-box' onChange={ (e) => setPassword(e.target.value) } placeholder='Password'></input>
                    <p className='error-msg'></p>
                    <br/>
                    <button type='submit' className='login-btn'>Log In</button>
                </form>
            </div>
        </div>

        <div className='img-panel'>
            <img src={logo} className='logo' alt=''></img>
        </div>
        </body>
    </>)
}

export default Login;