import '../styles/frontpage.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const FrontPage = () => {

    const [allReviews, setAllReviews] = useState([])

    const handleHibachi = () => {
        axios.get("http://localhost:4000/reviews/bob?restaurantName=Hibachi%20San").then((res) => {
            setAllReviews(res.data)
        }).catch((error) => {
            console.log(error)
        })
        console.log("hibachi selected")
    }
    const handlePanda = () => {
        axios.get("http://localhost:4000/reviews/bob?restaurantName=Panda%20Express").then((res) => {
            setAllReviews(res.data)
        }).catch((error) => {
            console.log(error)
        })
        console.log("panda selected")
    }
    const handleCarls = () => {
        axios.get("http://localhost:4000/reviews/bob?restaurantName=Carls%20Jr.").then((res) => {
            setAllReviews(res.data)
        }).catch((error) => {
            console.log(error)
        })
        console.log("carls selected")
    }
    const handleSubway = () => {
        axios.get("http://localhost:4000/reviews/bob?restaurantName=Subway").then((res) => {
            setAllReviews(res.data)
        }).catch((error) => {
            console.log(error)
        })
        console.log("subway selected")
    }
    const handleSaddles = () => {
        axios.get("http://localhost:4000/reviews/bob?restaurantName=Saddles").then((res) => {
            setAllReviews(res.data)
        }).catch((error) => {
            console.log(error)
        })
        console.log("saddles selected")
    }
    const handleCenterpointe = () => {
        axios.get("http://localhost:4000/reviews/bob?restaurantName=Centerpointe").then((res) => {
            setAllReviews(res.data)
        }).catch((error) => {
            console.log(error)
        })
        console.log("centerpointe selected")
    }

    const reviewList = allReviews.map((element) => {
        return (<>
            <tr>
                <td id='each-review-name'>{element.restaurantName}</td>
            </tr>
            <tr>
                <td id='each-review'>{element.reviewBody}</td>
            </tr>
        </>)
    })

    return (<>
        <body>
          <div className="container">

            <div className="grid-item1">
              <div className="review-creation" ><Link to='/createReview'>Create Review</Link></div>
              
            </div>

            <div className="grid-item2">
              <div className="rest-button">
                <button className='the-actual-btn' onClick={handleHibachi} value="Hibachi San">Hibachi San</button>
              </div>
              <div className="rest-button">
                <button className='the-actual-btn' onClick={handlePanda}>Panda Express</button>
              </div>
              <div className="rest-button">
                <button className='the-actual-btn' onClick={handleCarls}>Carl's Jr.</button>
              </div>
              <div className="rest-button">
                <button className='the-actual-btn' onClick={handleSubway}>Subway</button>
              </div>
              <div className="rest-button">
                <button className='the-actual-btn' onClick={handleSaddles}>Saddles</button>
              </div>
              <div className="rest-button">
                <button className='the-actual-btn' onClick={handleCenterpointe}>Centerpointe</button>
              </div>
            </div>

            <div className="grid-item3">
                <h1>Reviews</h1>
                <div className='review-container' id='rev-container'>
                    <table className='table'>
                        {reviewList}
                    </table>
                </div>
            </div>
          </div>
        </body>
      </>);
}

export default FrontPage;