
import './UserForm.css';

const UserForm = () => {
    return (
        <form>
            <div className='user-form__controls'>
                <div className='user-form__controls'>
                    <label>First Name</label>
                    <input type='text'/>
                </div>
                <div className='user-form__controls'>
                    <label>Last Name</label>
                    <input type='text'/>
                </div>
            </div>
            <div className='user-form-actions'>
                <button type='submit'>join the list!</button>
            </div>
        </form>
    )
}

export default UserForm