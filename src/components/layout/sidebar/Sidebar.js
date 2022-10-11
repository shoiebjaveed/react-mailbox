import { Link } from 'react-router-dom';
import sidebar from './Sidebar.module.css';
import { BsPencilSquare, BsFilePersonFill } from "react-icons/bs";
import { RiInboxFill } from "react-icons/ri";
import { MdOutlineLabelImportant } from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";

const Sidebar = () => {

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
                        <span>Inbox</span>
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
                <span>
                    <BsFilePersonFill />
                </span>
                <span>
                    <AiFillSetting />
                </span>
            </div>
        </div>
    </>
}

export default Sidebar