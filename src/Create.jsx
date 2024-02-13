import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const users = useSelector((state) => state.users);
    const dispacth = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispacth(addUser({id: users[users.length - 1].id + 1, name, email}))
        navigate('/')
    }

    return (
        <div className="d flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3>Add A Person</h3>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="nameInput">Name :</label>
                        <input type="text" class="form-control" id="nameInput" placeholder="Enter name"
                        onChange={e => setName(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="emailInput">E-Mail :</label>
                        <input type="email" class="form-control" id="emailInput" placeholder="Enter e-mail"
                        onChange={e => setEmail(e.target.value)} />

                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create