import '../styles/Header.css'
import ThreeBars from '../picfiles/Navigation-bar.png'
import ProfileIcon from '../picfiles/User.png'
import { useNavigate } from 'react-router-dom'

function Header() {

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

    const handle1 = () => {
        navigate("/dashboard")
    }

    return (<>
    <body>
        <div className="header-container">
            <button className='menu-btn' onClick={pressed}><img src={ThreeBars} title='' className='threebars' alt ='' /></button>
            
            <button className='pfp-btn'><img src={ProfileIcon} className='pfp-icon' alt='' /></button>
            <h2 className='site-name'>HEY</h2>
        </div>
        <div className='menu-dropdown' id='menu-dropdown'>
            <button className='menu-dropdown-btn1' onClick={handle1}>Restaurants</button>
            <button className='menu-dropdown-btn2'>View Reviews</button>
            <button className='menu-dropdown-btn1'>Write Review</button>
        </div>
    </body>
        
    </>)

}

export default Header;