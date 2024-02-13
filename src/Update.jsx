import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';



function Update() {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const {name, email} = existingUser[0];
    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        navigate('/')
    }

  return (
    <div className="d flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3>Update Person</h3>
                <form onSubmit={handleUpdate}>
                    <div class="form-group">
                        <label for="nameInput">Name :</label>
                        <input type="text" class="form-control" id="nameInput" placeholder="Enter name"
                        value={uname} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="emailInput">E-Mail :</label>
                        <input type="email" class="form-control" id="emailInput" placeholder="Enter e-mail"
                        value={uemail} onChange={e => setEmail(e.target.value)}/>

                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
  )
}

export default Update