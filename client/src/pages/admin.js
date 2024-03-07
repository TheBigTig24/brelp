import Header from '../components/Header'
import '../styles/admin.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Admin() {

    const [searchID, setSearchID] = useState(-1)
    const [resultUser, setResultUser] = useState(-1)


    const handle1 = (e) => {
        const smsg = document.getElementById('submit-msg')
        smsg.innerHTML = ""
        smsg.style.color = "black"

        const value = "" + e.target.value
        const forms = document.querySelectorAll(".forms-invisible, .forms-visible")
        const form = document.getElementById(value)
        form.classList.replace("forms-invisible", "forms-visible")
        
        for (let i = 0; i < forms.length; i++) {
            if ( (forms.item(i).id != form.id) && (forms.item(i).className == "forms-visible") ) {
                document.getElementById(forms.item(i).id).className = "forms-invisible"
            }
        }
    }

    const handleAddRestForm = (e) => {
        e.preventDefault()
        const elem = document.getElementById('submit-msg');
        let flag = true;

        console.log(e.target[0].value)
        for (let i = 0; i < 12; i++) {
            if (e.target[i].value == "") {
                flag = false
                elem.style.color = "red"
                elem.innerHTML = "Missing Element in Form"
            }
        }
        if (flag == true) {
            axios.post("http://localhost:4000/restaurants", { "restName": e.target[0].value, "restLocation": e.target[1].value, "restAddress": e.target[2].value, "phoneNumber": e.target[3].value, "sunHours": e.target[4].value, "monHours": e.target[5].value, "tueHours": e.target[6].value, "wedHours": e.target[7].value, "thuHours": e.target[8].value, "friHours": e.target[9].value, "satHours": e.target[10].value, "menuLink": e.target[11].value })
            .then((res) => {
                elem.style.color = "black"
                elem.innerHTML = "Restaurant Added Successfully"
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    const clearForm = () => {
        const thing = document.querySelector('.forms-visible').querySelectorAll('input')
        for (let i = 0; i < thing.length; i++) {
            thing.item(i).value = ""
        }
    }

    const handleDeleteRestForm = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
        axios.delete('http://localhost:4000/restaurants', { data: { "restName": e.target[0].value } })
            .then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            })
    }

    const handleDelAccForm = (e) => {
        e.preventDefault()
        const url = "http://localhost:4000/users/deleteById/bob?userId=" + resultUser
        axios.delete(url)
            .then((res) => {
                const p = document.querySelector('#del-acc-form').querySelector('#submit-msg')
                p.innerHTML = "User " + resultUser + " has been deleted"
            }).catch((error) => {
                console.log(error)
            })

    }

    const handleDelAccFormSearch = (e) => {
        const url = "http://localhost:4000/users/bob?userId=" + searchID
        axios.get(url)
            .then((res) => {
                const p = document.querySelector('#del-acc-form').querySelector('#submit-msg')
                p.innerHTML = "Returned User: " + res.data[0].email
                setResultUser(res.data[0].userId)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {

    }, [])

    return(<>
        <Header />
        <div className='left'>
            <button className='btn' onClick={handle1} value="add-rest-form">Add Restaurant</button>
            <button className='btn' onClick={handle1} value="update-rest-form">Update Restaurant</button>
            <button className='btn' onClick={handle1} value="del-rest-form">Delete Restaurant</button>
            <button className='btn' onClick={handle1} value="del-acc-form">Delete Account</button>
            <button className='btn' onClick={handle1} value="del-rev-form">Delete Review</button>
        </div>
        <div className='right'>
            <form className='forms-invisible' id='add-rest-form' onSubmit={handleAddRestForm}>
                <p id='title'>Add a Restaurant</p>
                <p>Enter Restaurant Name</p>
                <input type='text'></input>
                <p>Enter Restaurant Location</p>
                <input type='text'></input>
                <p>Enter Restaurant Address</p>
                <input type='text'></input>
                <p>Enter Restaurant Phone Number</p>
                <input type='text'></input>
                <p>Enter Sunday Hours</p>
                <input type='text'></input>
                <p>Enter Monday Hours</p>
                <input type='text'></input>
                <p>Enter Tuesday Hours</p>
                <input type='text'></input>
                <p>Enter Wednesday Hours</p>
                <input type='text'></input>
                <p>Enter Thursday Hours</p>
                <input type='text'></input>
                <p>Enter Friday Hours</p>
                <input type='text'></input>
                <p>Enter Saturday Hours</p>
                <input type='text'></input>
                <p>Enter Menu Link</p>
                <input type='text'></input>
                <br/>
                <p id='submit-msg'></p>
                <button type='submit'>Add</button><button id='clear' type='button' onClick={clearForm}>Clear</button>
                
            </form>
            <form className='forms-invisible' id='update-rest-form'>
                <p id='title'>Update Restaurant Details</p>
            </form>
            <form className='forms-invisible' id='del-rest-form' onSubmit={handleDeleteRestForm}>
                <p id='title'>Delete a Restaurant</p>
                <p>Enter Name of Restaurant</p>
                <input type='text'></input>
                <br/>
                <button type='submit'>Delete</button>
            </form>
            <form className='forms-invisible' id='del-acc-form' onSubmit={handleDelAccForm}>
                <p id='title'>Delete an Account</p>
                <p>Search Account By Id</p>
                <input type='number' onChange={(e) => setSearchID(e.target.value)}></input>
                <br/>
                <p id='submit-msg'></p>
                <button id='submitting' type='button' onClick={handleDelAccFormSearch}>Search</button><button id='clear' type='submit'>Delete</button>
            </form>
            <form className='forms-invisible' id='del-rev-form'>
                <p id='title'>Delete a Review</p>
            </form>
        </div>
    </>)
}

export default Admin;