import '../styles/Header.css'
import ThreeBars from '../picfiles/Navigation-bar.png'
import ProfileIcon from '../picfiles/User.png'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Header() {

    const [id, setId] = useState(-1);

    useEffect(() => {
        const tempId = localStorage.getItem('userId')
        console.log(tempId)
        const url = "http://localhost:4000/users/bob?userId=" + tempId
        axios.get(url)
            .then((res) => {
                const uID = res.data[0].userId
                setId(uID)
                document.getElementById('logout-btn').innerHTML = "Log Out"
            }).catch((error) => {
                //this part means that no user is logged in
                console.log(error)
                document.getElementById('logout-btn').innerHTML = "Sign In"
            })
    }, [])

    const navigate = useNavigate();

    const pressed = () => {
        const zInd = document.getElementById('menu-dropdown').style.zIndex
        if (zInd == 1) {
            document.getElementById('menu-dropdown').style.animation = ".2s menu-visible forwards"
            document.getElementById('menu-dropdown').style.zIndex = 10
        } else if (zInd == 10) {
            document.getElementById('menu-dropdown').style.animation = ".2s menu-invisible forwards"
            document.getElementById('menu-dropdown').style.zIndex = 1
        } else {
            document.getElementById('menu-dropdown').style.animation = ".2s menu-visible forwards"
            document.getElementById('menu-dropdown').style.zIndex = 10
        }
    }

    const pfpBtn = () => {
        const zInd = document.getElementById('logout-dropdown').style.zIndex
        if (zInd == 1) {
            document.getElementById('logout-dropdown').style.animation = ".2s logout-visible forwards"
            document.getElementById('logout-dropdown').style.zIndex = 10
        } else if (zInd == 10) {
            document.getElementById('logout-dropdown').style.animation = ".2s logout-invisible forwards"
            document.getElementById('logout-dropdown').style.zIndex = 1
        } else {
            document.getElementById('logout-dropdown').style.animation = ".2s logout-visible forwards"
            document.getElementById('logout-dropdown').style.zIndex = 10
        }
    }

    const handle1 = () => {
        navigate("/dashboard")
    }

    const handle2 = () => {
        navigate("/")
    }

    const handle3 = () => {
        navigate("/newReview")
    }

    const handle4 = () => {
        if (id > 0) {
            setId(-1)
            localStorage.setItem('userId', -1)
            navigate("/login")
        } else {
            navigate("/login")
        }
    }

    return (<>
    <body>
        <div className="header-container">
            <button className='menu-btn' onClick={pressed} ><img src={ThreeBars} title='' className='threebars' alt ='' /></button>
            
            <button className='pfp-btn' onClick={pfpBtn} ><img src={ProfileIcon} className='pfp-icon' alt='' /></button>
            <h2 className='site-name'>EquestrianEats</h2>
        </div>
        <div className='menu-dropdown' id='menu-dropdown'>
            <button className='menu-dropdown-btn1' onClick={handle1}>Restaurants</button>
            <button className='menu-dropdown-btn2' onClick={handle2}>About</button>
            <button className='menu-dropdown-btn1' onClick={handle3}>Write Review</button>
        </div>
        <div className='logout-dropdown' id='logout-dropdown'>
            <button className='logout-btn' id='logout-btn' onClick={handle4}>Log Out</button>
        </div>
    </body>
        
    </>)

}

export default Header;