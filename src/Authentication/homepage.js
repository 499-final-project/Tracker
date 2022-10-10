
import {useNavigate} from 'react-router-dom'
import { AuthContext } from './AuthContext';
import { useContext } from 'react';

export function Homepage() {
const history = useNavigate();
const {logout} = useContext(AuthContext);
async function handlelogout(e){
    e.preventDefault();
    try {
        await logout();
        window.localStorage.clear();
        console.log('logout successful')
        history("/login");
    } catch (error) {
        console.log('failed to log out')
    }
};
return (
    <>
    <div>homepage test</div>
    <button onClick={handlelogout}>Logout</button>
    </>
)
}