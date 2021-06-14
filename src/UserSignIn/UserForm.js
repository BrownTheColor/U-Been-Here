import React, { useState } from 'react';
import './UserForm.css';

const UserForm = () => {

    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')

    const submitHandler = (e) => {

        e.preventDefault();

        const userInfo = {

        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='user-form__controls'>
                <div className='user-form__controls'>
                    <label>First Name</label>
                    <input value={name} type='text'/>
                </div>
                <div className='user-form__controls'>
                    <label>Nickname</label>
                    <input value={nickname} type='text'/>
                </div>
            </div>
            <div className='user-form-actions'>
                <button type='submit'>join the list!</button>
            </div>
        </form>
    )
}

export default UserForm