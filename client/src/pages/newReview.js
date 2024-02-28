import '../styles/newReview.css'
import Header from '../components/Header'
import Star from '../picfiles/Star.png'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function NewReview() {

    const [restaurant, setRestaurant] = useState('Hibachi')
    const [starRating, setStarRating] = useState(0)
    const [reviewTitle, setReviewTitle] = useState('')
    const [reviewText, setReviewText] = useState('')

    const [email, setEmail] = useState('')
    const [theId, setTheId] = useState()
    const [username, setUsername] = useState('Guest')

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

    const handleSR = (e) => {
        e.preventDefault()

        const val = e.currentTarget.value
        const buttons = document.querySelectorAll('.star-btn')

        if (val == 1) {
            document.getElementById('b1').style.backgroundColor = "black";
            for (let i = 1; i < 5; i++) {
                buttons[i].style.backgroundColor = ""
            }
        } else if (val == 2) {
            document.getElementById('b1').style.backgroundColor = "black";
            document.getElementById('b2').style.backgroundColor = "black";
            for (let i = 2; i < 5; i++) {
                buttons[i].style.backgroundColor = ""
            }
        } else if (val == 3) {
            for (let i = 0; i < 3; i++) {
                buttons[i].style.backgroundColor = "black"
            }
            for (let i = 3; i < 5; i++) {
                buttons[i].style.backgroundColor = ""
            }
        } else if (val == 4) {
            for (let i = 0; i < 4; i++) {
                buttons[i].style.backgroundColor = "black"
            }
            document.getElementById('b5').style.backgroundColor = "";
        } else if (val == 5) {
            for (let i = 0; i < 5; i++) {
                buttons[i].style.backgroundColor = "black"
            }
        }

        setStarRating(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (reviewText == "" || starRating == 0) {
            document.getElementById("empty").innerHTML = "Missing star rating and/or review body"
        } else {
            document.getElementById("empty").innerHTML = ""
            axios.post("http://localhost:4000/reviews", { "restaurantName": restaurant, "reviewTitle": reviewTitle, "reviewBody": reviewText, "userName": username, "reviewRating": starRating })
                .then((res) => {
                    console.log(res)
                }).catch((error) => {
                    console.log(error)
                })
        }
    }

    return(<>
        <Header/>
        <div className='container'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='grid-1'>
                    <select className='select-restaurant' value={restaurant} onChange={(e) => setRestaurant(e.target.value)}>
                        <option value="Hibachi">Hibachi</option>
                        <option value="Panda Express">Panda Express</option>
                        <option value="Subway">Subway</option>
                        <option value="Qdoba">Qdoba</option>
                        <option value="Saddles">Saddles</option>
                        <option value="Centerpointe">Centerpointe</option>
                        <option value="Carls Jr">Carl's Jr.</option>
                    </select><br/>
                </div>
                <div className='grid-2'>
                    <div className='stars-container'>
                        <button className='star-btn' id='b1' onClick={(e) => {handleSR(e)} } value="1"><img id='star' src={Star} alt=''></img></button>
                        <button className='star-btn' id='b2' onClick={(e) => {handleSR(e)} } value="2"><img id='star' src={Star} alt=''></img></button>
                        <button className='star-btn' id='b3' onClick={(e) => {handleSR(e)} } value="3"><img id='star' src={Star} alt=''></img></button>
                        <button className='star-btn' id='b4' onClick={(e) => {handleSR(e)} } value="4"><img id='star' src={Star} alt=''></img></button>
                        <button className='star-btn' id='b5' onClick={(e) => {handleSR(e)} } value="5"><img id='star' src={Star} alt=''></img></button>
                    </div>
                    
                </div>
                <div className='grid-3'>
                    <p className='write-here'>Add Review Title</p>
                    <input className="review-title" type='text' onChange={(e) => setReviewTitle(e.target.value)} ></input>
                    <p className='write-here'>Write Your Review Here!</p>
                    <textarea className='review-body' rows={12} cols={75} onChange={(e) => setReviewText(e.target.value)} >
                        
                    </textarea>
                    <p id='empty'></p>
                    <button className='submit-btn' type='submit'>Post Review</button>
                </div>
            </form>
        </div>
    </>)
}

export default NewReview