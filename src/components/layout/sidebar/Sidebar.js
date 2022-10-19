import { Link } from 'react-router-dom';
import sidebar from './Sidebar.module.css';
import { useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import { BsPencilSquare, BsFilePersonFill } from "react-icons/bs";
import { RiInboxFill } from "react-icons/ri";
import { MdOutlineLabelImportant } from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {

    const auth = useContext(AuthContext);

    const logoutHandler = () => {
        auth.logout()
    }

    return <>
        <div className={sidebar.container}>
            <nav className={sidebar.nav}>
                <Link to='/write' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <li className={sidebar.list}>
                        <span ><BsPencilSquare /></span>
                        <span>Write</span>
                    </li>
                </Link>
                <Link to='/inbox' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <li className={sidebar.list}>
                        <span ><RiInboxFill /></span>
                        <span>{`Inbox(0 unread)`}</span>
                    </li>
                </Link>
                <Link to='/sent' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <li className={sidebar.list}>
                        <span ><MdOutlineLabelImportant /></span>
                        <span>Sent</span>
                    </li>
                </Link>
                <Link to='/draft' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <li className={sidebar.list}>
                        <span ><HiOutlineNewspaper /></span>
                        <span>Draft</span>
                    </li>
                </Link>
            </nav>
            <div className={sidebar.profiles}>
                <p>profiles</p>
            </div>
            <div className={sidebar.bottom}>
                <Link to='/user' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <span>
                        <BsFilePersonFill />
                    </span>
                </Link>
                <span onClick={logoutHandler}>
                    <FiLogOut />
                </span>
            </div>
        </div>
    </>
}

export default Sidebar