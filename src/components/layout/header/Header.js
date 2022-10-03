import header from './Header.module.css';
import { GiMailbox } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { useContext } from 'react';
import AuthContext from '../../../store/auth-context';


const Header = () => {
    const auth = useContext(AuthContext);

    const logoutHandler = () => {
        auth.logout()
    }

    return <>
        <header className={header.container}>
            <nav className={header.content}>
                <div className={header.firstdiv}>
                    <h3>MailBox <GiMailbox /></h3>
                </div>
                <div className={header.seconddiv}>
                    <input type='text' placeholder='search for mail..' />
                </div>
                <div className={header.thirddiv}>
                    <span onClick={logoutHandler}><FiLogOut /><p>logout</p></span>
                </div>
            </nav>
        </header>
    </>
}

export default Header;