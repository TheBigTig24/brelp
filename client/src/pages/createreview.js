import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../styles/createreview.css'
import axios from 'axios'


const ReviewCreation = () => {

    const [resta, setResta] = useState('Hibachi San');
    const [revi, setRevi] = useState('');
    
    const submit = (e) => {
        e.preventDefault()
        if (revi == "") {
            document.getElementById('noRev').innerHTML = "no review has been written"
        } else {
            document.getElementById('noRev').innerHTML = "";
            axios.post("http://localhost:4000/reviews", {"restaurantName": resta, "reviewBody": revi}).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    return (<>
        <body>
          <div className="container">
            <div className="grid-item1">
              <div className="review-creation"><p className='back-btn'><Link to='/'>Go Back</Link></p></div>
              <h1 className='title'>Brelp Me</h1>
            </div>
            <div className="grid-item2">
              
            </div>
            <div className="grid-item3">
                <h1>Write Your Review</h1>
                <div className='form-box'>
                    <form className='daform' onSubmit={submit}>
                        <label className='select-rest-label' for='select-restaurant'>Select a Restaurant:</label><br/>
                        <select  className='selecting-restaurant' value={ resta } onChange={(e) => setResta(e.target.value)} name="select-restaurant" id='select-restaurant' form='select-restaurant'>
                            <option value='Hibachi San' selected>Hibachi San</option>
                            <option value='Panda Express'>Panda Express</option>
                            <option value='Carls Jr.'>Carl's Jr.</option>
                            <option value='Subway'>Subway</option>
                            <option value='Saddles'>Saddles</option>
                            <option value='Centerpointe'>Centerpointe</option>
                        </select><br/>
                        <label className='rev-body-label' for='review-body' >Write Your Review!</label><br/>
                        <textarea className='review-body' id='review-body' value={ revi } onChange={(e) => setRevi(e.target.value)} type='text' rows={15} cols={75}></textarea><br/>
                        <p id='noRev'></p>
                        <button  className='submit-btn' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
          </div>
        </body>
    </>)
}

export default ReviewCreation;