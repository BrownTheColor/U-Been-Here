import './UserSignIn.css';
import Card from '../UI/Card';
import UserForm from './UserForm';


const UserSignIn = () => {

    return (
        <Card className='user-sign-in__body'>
            <UserForm/>
        </Card>
    );
}

export default UserSignIn;