import Header from '../components/Header'
import '../styles/createacc.css'
import Logo from '../picfiles/CPP-logo.png'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateAcc() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [maxPassword, setMaxPassword] = useState();

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:4000/users/getLatestAccount/acc")
            .then((res) => {
                setMaxPassword(res.data.userId)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password1 != password2) {
            document.getElementById('not-matching').innerHTML = "Passwords do not match"
        } else if ( (password1.length < 8) || (password2.length < 8) ) {
            document.getElementById('not-matching').innerHTML = "Password must be longer than 7 characters"
        } else if ( (password1.search(/[~!@#$%^&*()_+\-=`[\]{};':",.\/\<>?]/) < 0) ) {
            console.log( "special" + password1.search(/[~!@#$%^&*()_+\-=`[\]{};':",.\/\<>?]/) )
            document.getElementById('not-matching').innerHTML = "Password must contain a special character"
        } else if ( (password1.search(/[1234567890]/)) < 0 ) {
            console.log( "numba" + password1.search(/1234567890/) )
            document.getElementById('not-matching').innerHTML = "Password must contain a number"
        } else {
            document.getElementById('not-matching').innerHTML = "";
            axios.post("http://localhost:4000/users", { "userId": maxPassword + 1, "username": username, "email": email, "password": password1 } )
                .then((res) => {
                    localStorage.setItem('userId', maxPassword + 1)
                    navigate("/dashboard")
                }).catch((error) => {
                    console.log(error)
                })
        }
    }

    return(<>
        <Header/>
        <body>
        <div className='left-panel'>
            <form className='form-2' onSubmit={handleSubmit}>
                <p id='title'>Create Account</p>
                <p id='link-back'>Already have an account? <a href='/login'>Log in here.</a></p>
                <input type='email'  className='text-box' onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'></input><br/>
                <input type='username' className='text-box' onChange={(e) => setUsername(e.target.value)} placeholder='Enter Name'></input><br/>
                <input type='password' className='text-box' onChange={(e) => setPassword1(e.target.value)} placeholder='Enter Password'></input><br/>
                <input type='password' className='text-box' onChange={(e) => setPassword2(e.target.value)} placeholder='Re Enter Password'></input><br/>
                <p id='not-matching'></p>
                <button type='submit' className='submit-btn'>Create Account</button>
            </form>
        </div>
        <div className='right-panel'>
            <img src={Logo} alt=''></img>
        </div>
        </body>
    </>)
}

export default CreateAcc;