import '../styles/dashboard.css'
import Header from '../components/Header'
import Magnifier from '../picfiles/Magnifier.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Dashboard() {

    const date = new Date();
    const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

    const [email, setEmail] = useState('')
    const [theId, setTheId] = useState()
    const [username, setUsername] = useState('Guest')

    const [bsc, setBSC] = useState(false)
    const [cc, setCC] = useState(false)
    const [other, setOther] = useState(false)

    useEffect(() => {
        const id = localStorage.getItem('userId')
        const url = "http://localhost:4000/users/bob?userId=" + id
        axios.get(url)
            .then((res) => {
                setEmail(res.data[0].email)
                setTheId(res.data[0].userId)
                setUsername(res.data[0].username)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    const change = () => {

    }

    return(<>
        <Header />
        <div className='parent'>
            <div className='search-bar-container'>
                <h1>Welcome, { username }</h1>
                <form className='search-form'>
                    <input className='search-bar' type='text'></input>
                </form>
                <img className='magnifier' src={Magnifier} alt=''></img>
            </div>

            <div className='filter-sidebar'>
                <form className='filter-form'>
                    <p>Filter By Location</p>
                    <input id='cb1' type='checkbox' value={bsc} onChange={(e) => setBSC(!bsc)}></input>
                    <label for='cb1'>BSC</label><br/>
                    <input id='cb2' type='checkbox' value={cc} onChange={(e) => setCC(!cc)}></input>
                    <label for='cb2'>Campus Center</label><br/>
                    <input id='cb3' type='checkbox' value=''></input>
                    <label for='cb3'>The Suites</label><br/>
                    <input id='cb4' type='checkbox' value=''></input>
                    <label for='cb4'>College of Business</label><br/>
                    <input id='cb5' type='checkbox' value=''></input>
                    <label for='cb5'>Centerpointe</label><br/>
                    <input id='cb6' type='checkbox' value={other} onChange={(e) => setOther(!other)}></input>
                    <label for='cb6'>Other</label><br/>

                    <p>Currently Open</p>
                    <input id='op1' type='radio'></input>
                    <label for='op1'>Open</label><br/>
                    <input id='op2' type='radio'></input>
                    <label for='op2'>Any</label><br/>

                    <p>Cafe</p>
                    <input id='cf1' type='radio'></input>
                    <label for='cf1'>Is a Cafe</label>
                    
                </form>
            </div>

            <div className='results-bar'>
                <p id='testicles'></p>
            </div>
        </div>
    </>)
}

export default Dashboard;