
import {useNavigate} from 'react-router-dom'
import { AuthContext } from './AuthContext';
import { useContext } from 'react';

export function Logout() {
const history = useNavigate();
const {logout} = useContext(AuthContext);
async function handlelogout(e){
    e.preventDefault();
    try {
        await logout();
        window.localStorage.clear();
        console.log('logout successful')
        history("/");
    } catch (error) {
        console.log('failed to log out')
    }
};
return (
    <>
    <button onClick={handlelogout}>Logout</button>
    </>
)
}