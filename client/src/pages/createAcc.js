import Header from '../components/Header'
import '../styles/createacc.css'
import Logo from '../picfiles/CPP-logo.png'

function CreateAcc() {

    return(<>
        <Header/>
        <div className='left-panel'>
            <form className='form'>
                <p id='title'>Create Account</p>
                <p id='link-back'>Already have an account? <a href='/login'>Log in here.</a></p>
                <input type='email'  className='text-box' placeholder='Enter Email'></input><br/>
                <input type='password' className='text-box' placeholder='Enter Password'></input><br/>
                <input type='password' className='text-box' placeholder='Re Enter Password'></input><br/>
                <button type='submit' className='submit-btn'>Create Account</button>
            </form>
        </div>
        <div className='right-panel'>
            <img src={Logo} alt=''></img>
        </div>
    </>)
}

export default CreateAcc;