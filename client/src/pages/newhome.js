import Header from '../components/Header'
import '../styles/newhome.css'

function NewHome() {

    return (<>
    <body>
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
        <div className='info-container'>
            <div className='about'>
                <h2>About</h2>
                <p>This web application was made using React.js, Express.js, Node.js, and MongoDB by TheBigTig</p>
            </div>
        </div>
        <div className='footer'>

        </div>
    </body>
    </>)
}

export default NewHome;