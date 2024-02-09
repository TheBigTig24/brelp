import Header from '../components/Header'
import '../styles/newhome.css'

function NewHome() {

    return (<>
        <Header/>
        <div className='slides-container'>
            <div className='slide1'>
                
            </div>
            <div className='slide2'>

            </div>
            <div className='slide3'>

            </div>
            <div className='slide4'>

            </div>
        </div>
        <div className='under-slides-container'>
            <h2>About</h2><br/>
            <p>Some information that for some reason wont go the next line</p>
        </div>
    </>)
}

export default NewHome;